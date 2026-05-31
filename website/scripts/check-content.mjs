#!/usr/bin/env node
/**
 * Validates website content drift against repository state.
 * Detects broken links, count mismatches, and operational snapshot drift.
 * Does not rewrite content — reports issues for human or agent follow-up.
 *
 * Usage: npm run content:check (from website/)
 */

import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const WEBSITE_ROOT = resolve(__dirname, "..");
const REPO_ROOT = resolve(WEBSITE_ROOT, "..");
const LIB_DIR = join(WEBSITE_ROOT, "src/lib");

const manifest = JSON.parse(readFileSync(join(__dirname, "content-manifest.json"), "utf8"));

/** @type {string[]} */
const errors = [];
/** @type {string[]} */
const warnings = [];

/** @param {string} message */
function fail(message) {
  errors.push(message);
}

/** @param {string} message */
function warn(message) {
  warnings.push(message);
}

/** @param {string} repoRelativePath */
function repoPathExists(repoRelativePath) {
  return existsSync(join(REPO_ROOT, repoRelativePath));
}

/**
 * @param {string} dir
 * @returns {string[]}
 */
function getLibFiles(dir) {
  return readdirSync(dir)
    .map((entry) => join(dir, entry))
    .filter((full) => statSync(full).isFile() && full.endsWith(".ts"));
}

/**
 * @param {string} source
 * @returns {Set<string>}
 */
function extractRepoPaths(source) {
  const paths = new Set();

  for (const match of source.matchAll(/repoFileUrl\(\s*["']([^"']+)["']\s*\)/g)) {
    paths.add(match[1]);
  }

  return paths;
}

function checkReferencedPaths() {
  const libFiles = getLibFiles(LIB_DIR);

  for (const file of libFiles) {
    const source = readFileSync(file, "utf8");
    for (const path of extractRepoPaths(source)) {
      if (!repoPathExists(path)) {
        fail(`Broken content link: ${path} (referenced in ${file.replace(REPO_ROOT, "")})`);
      }
    }
  }
}

function checkManifestArtifacts() {
  const { publishedArtifacts } = manifest;

  for (const path of publishedArtifacts) {
    if (!repoPathExists(path)) {
      fail(`Manifest artifact missing on disk: ${path}`);
    }
  }

  const siteSource = readFileSync(join(LIB_DIR, "site.ts"), "utf8");
  const countMatch = siteSource.match(/PUBLISHED_ARTIFACT_COUNT\s*=\s*(\d+)/);
  if (!countMatch) {
    fail("Could not read PUBLISHED_ARTIFACT_COUNT from website/src/lib/site.ts");
    return;
  }

  const declaredCount = Number(countMatch[1]);
  const manifestCount = publishedArtifacts.length;

  if (declaredCount !== manifestCount) {
    fail(
      `PUBLISHED_ARTIFACT_COUNT is ${declaredCount} but content-manifest.json lists ${manifestCount} artifacts`,
    );
  }
}

function checkAudits() {
  const artifactsSource = readFileSync(join(LIB_DIR, "artifacts-content.ts"), "utf8");

  for (const audit of manifest.audits) {
    if (!repoPathExists(audit.path)) {
      fail(`Audit file missing: ${audit.path} (${audit.id})`);
    }

    if (!artifactsSource.includes(`"${audit.id}"`)) {
      fail(`Audit ${audit.id} not found in website/src/lib/artifacts-content.ts`);
    }

    if (!artifactsSource.includes(audit.path)) {
      fail(`Audit ${audit.id} path ${audit.path} not linked in artifacts-content.ts`);
    }
  }
}

function checkOperationalSnapshot() {
  const { operationalSnapshot } = manifest;
  const currentState = readFileSync(join(REPO_ROOT, operationalSnapshot.currentStatePath), "utf8");
  const siteSource = readFileSync(join(REPO_ROOT, operationalSnapshot.siteTsPath), "utf8");

  const phaseSection = currentState.match(/## Current Phase\s*\n\s*\n([^\n]+)/);
  if (!phaseSection) {
    fail("Could not parse ## Current Phase from agents/current-state.md");
  } else if (phaseSection[1].trim() !== operationalSnapshot.expectedPhase) {
    warn(
      `current-state phase is "${phaseSection[1].trim()}" — update content-manifest.json expectedPhase or sync website content`,
    );
  }

  const siteHealthMatch = siteSource.match(/health:\s*["']([^"']+)["']/);
  if (siteHealthMatch && siteHealthMatch[1] !== operationalSnapshot.expectedHealth) {
    const healthSection = currentState.match(/## Project Health\s*\n\s*\n([^\n]+)/);
    if (healthSection?.[1].includes(operationalSnapshot.expectedHealth)) {
      fail(
        `site.ts health is "${siteHealthMatch[1]}" but current-state indicates ${operationalSnapshot.expectedHealth}`,
      );
    }
  }

  const phaseMatch = siteSource.match(/phase:\s*["']([^"']+)["']/);
  if (phaseSection && phaseMatch) {
    const currentPhase = phaseSection[1].trim();
    if (!currentPhase.startsWith(phaseMatch[1])) {
      warn(
        `site.ts phase "${phaseMatch[1]}" may not match current-state "${currentPhase}" — review PROJECT_STATUS in site.ts`,
      );
    }
  }
}

function checkCategoryCounts() {
  const artifactsSource = readFileSync(join(LIB_DIR, "artifacts-content.ts"), "utf8");

  for (const match of artifactsSource.matchAll(/count:\s*(\d+)/g)) {
    const count = Number(match[1]);
    if (count <= 0) {
      warn(`Suspicious artifact category count: ${count}`);
    }
  }
}

console.log("Wild Free Gallery — website content check\n");

checkReferencedPaths();
checkManifestArtifacts();
checkAudits();
checkOperationalSnapshot();
checkCategoryCounts();

if (warnings.length > 0) {
  console.log("Warnings:");
  for (const message of warnings) {
    console.log(`  ⚠ ${message}`);
  }
  console.log();
}

if (errors.length > 0) {
  console.error("Errors:");
  for (const message of errors) {
    console.error(`  ✗ ${message}`);
  }
  console.error(`\n${errors.length} error(s). Update website/src/lib/*-content.ts and/or content-manifest.json.\n`);
  process.exit(1);
}

console.log("✓ Content check passed");
if (warnings.length > 0) {
  console.log(`  (${warnings.length} warning(s) — review recommended)\n`);
} else {
  console.log();
}
