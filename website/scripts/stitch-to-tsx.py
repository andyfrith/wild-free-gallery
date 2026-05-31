#!/usr/bin/env python3
"""Convert Stitch HTML exports to Next.js page components."""

from __future__ import annotations

import re
import sys
from pathlib import Path

BASE = Path(__file__).resolve().parents[2] / "assets/visual-exploration/cinematic-light"
OUT = Path(__file__).resolve().parents[1] / "src/app"

PAGES = {
    "home": {"route": "/", "component": "HomePage"},
    "story": {"route": "/story", "component": "StoryPage"},
    "journey": {"route": "/journey", "component": "JourneyPage"},
    "artifacts": {"route": "/artifacts", "component": "ArtifactsPage"},
    "about": {"route": "/about", "component": "AboutPage"},
}

ROUTE_MAP = {
    "Home": "/",
    "Story": "/story",
    "Journey": "/journey",
    "Artifacts": "/artifacts",
    "About": "/about",
    "Home Archive": "/",
    "The Narrative": "/story",
    "Design Logs": "/journey",
    "Repository": "https://github.com/andyfrith/wild-free-gallery",
}

VOID_TAGS = {
    "area", "base", "br", "col", "embed", "hr", "img", "input",
    "link", "meta", "param", "source", "track", "wbr",
}


def style_to_jsx(style: str) -> str:
    parts: list[str] = []
    # Split on semicolons not inside parentheses
    decls: list[str] = []
    current = ""
    depth = 0
    for ch in style:
        if ch == "(":
            depth += 1
        elif ch == ")":
            depth -= 1
        if ch == ";" and depth == 0:
            if current.strip():
                decls.append(current.strip())
            current = ""
        else:
            current += ch
    if current.strip():
        decls.append(current.strip())

    for decl in decls:
        if ":" not in decl:
            continue
        prop, val = decl.split(":", 1)
        prop = prop.strip()
        val = val.strip()
        camel = re.sub(r"-([a-z])", lambda m: m.group(1).upper(), prop)
        escaped = val.replace("\\", "\\\\").replace('"', '\\"')
        parts.append(f'{camel}: "{escaped}"')
    return "{{" + ", ".join(parts) + "}}"


def convert_attrs(tag: str) -> str:
    tag = re.sub(r"\bclass=", "className=", tag)
    tag = re.sub(r"\bfor=", "htmlFor=", tag)
    tag = re.sub(r"\btabindex=", "tabIndex=", tag)
    tag = re.sub(r"\bautocomplete=", "autoComplete=", tag)

    def style_repl(match: re.Match[str]) -> str:
        return f"style={style_to_jsx(match.group(1))}"

    tag = re.sub(r'style="([^"]*)"', style_repl, tag)
    return tag


def void_self_close(html: str) -> str:
    for tag in VOID_TAGS:
        pattern = rf"<({tag})([^>]*?)(?<!\/)>"
        html = re.sub(pattern, r"<\1\2 />", html, flags=re.IGNORECASE)
    html = re.sub(r"<br\s*/?>", "<br />", html, flags=re.IGNORECASE)
    return html


def fix_text_content(html: str) -> str:
    """Escape apostrophes in text nodes for JSX."""

    def repl(match: re.Match[str]) -> str:
        text = match.group(1)
        if not text.strip():
            return match.group(0)
        text = text.replace("&", "&amp;")
        text = text.replace('"', "&quot;")
        # Keep apostrophe as entity for JSX safety
        text = text.replace("'", "&apos;")
        return f">{text}<"

    return re.sub(r">([^<]+)<", repl, html)


def convert_links(html: str) -> str:
    for label, route in ROUTE_MAP.items():
        html = re.sub(
            rf'<a className="([^"]*)" href="#">{re.escape(label)}</a>',
            rf'<Link href="{route}" className="\1">{label}</Link>',
            html,
        )
    # Buttons that should be links
    html = re.sub(
        r'<button className="(px-xl py-md bg-primary text-on-primary[^"]*)">\s*Explore Journey',
        r'<Link href="/journey" className="\1">Explore Journey',
        html,
    )
    html = re.sub(
        r'Explore Journey\s*<span className="material-symbols-outlined">arrow_forward</span>\s*</button>',
        'Explore Journey <span className="material-symbols-outlined">arrow_forward</span></Link>',
        html,
    )
    html = re.sub(
        r'<button className="(px-xl py-md bg-white/50[^"]*)">\s*View Artifacts\s*</button>',
        r'<Link href="/artifacts" className="\1">View Artifacts</Link>',
        html,
    )
    html = re.sub(
        r'<button className="(flex items-center gap-sm text-primary[^"]*)">\s*<span className="border-b-2',
        r'<Link href="/journey" className="\1"><span className="border-b-2',
        html,
    )
    html = re.sub(
        r'(<Link href="/journey" className="flex items-center gap-sm text-primary[^"]*">.*?arrow_forward</span>)\s*</button>',
        r"\1</Link>",
        html,
        flags=re.DOTALL,
    )
    html = re.sub(
        r'<a className="(text-primary font-bold text-label-md[^"]*)" href="#">View Full Archive</a>',
        r'<Link href="/artifacts" className="\1">View Full Archive</Link>',
        html,
    )
    return html


def extract_section(html: str, tag: str) -> str | None:
    pattern = rf"<{tag}[^>]*>(.*?)</{tag}>"
    match = re.search(pattern, html, re.DOTALL | re.IGNORECASE)
    return match.group(0) if match else None


def html_fragment_to_jsx(fragment: str) -> str:
    fragment = re.sub(r"<script[\s\S]*?</script>", "", fragment, flags=re.IGNORECASE)
    fragment = re.sub(r"<!--.*?-->", "", fragment, flags=re.S)
    fragment = fragment.replace("&amp;", "___AMP___")
    fragment = fragment.replace("&lt;", "<").replace("&gt;", ">")

    # Convert opening tags
    def open_tag_repl(match: re.Match[str]) -> str:
        return convert_attrs(match.group(0))

    fragment = re.sub(r"<[^/!][^>]*>", open_tag_repl, fragment)
    fragment = void_self_close(fragment)
    fragment = convert_links(fragment)
    fragment = fix_text_content(fragment)
    fragment = fragment.replace("___AMP___", "&amp;")

    # Indent
    lines = [ln.rstrip() for ln in fragment.split("\n") if ln.strip()]
    return "\n".join(f"      {ln}" for ln in lines)


def generate_page(name: str, config: dict) -> str:
    html_path = BASE / f"{name}.html"
    html = html_path.read_text(encoding="utf-8")

    main = extract_section(html, "main")
    footer = extract_section(html, "footer")
    if not main:
        raise ValueError(f"No <main> found in {html_path}")

    main_open = re.match(r"^<main([^>]*)>", main, flags=re.I)
    main_attrs = convert_attrs(main_open.group(1)) if main_open else ""
    main_class = ""
    class_match = re.search(r'className="([^"]*)"', main_attrs)
    if class_match:
        main_class = f'className="{class_match.group(1)}"'

    main_inner = re.sub(r"^<main[^>]*>", "", main, flags=re.I)
    main_inner = re.sub(r"</main>$", "", main_inner, flags=re.I).strip()

    main_jsx = html_fragment_to_jsx(main_inner)
    footer_jsx = html_fragment_to_jsx(footer) if footer else ""

    return f'''import Link from "next/link";

export default function {config["component"]}() {{
  return (
    <>
      <main {main_class}>
{main_jsx}
      </main>
{footer_jsx}
    </>
  );
}}
'''


def main() -> int:
    for name, config in PAGES.items():
        content = generate_page(name, config)
        out_dir = OUT / ("" if name == "home" else name)
        out_path = out_dir / "page.tsx"
        out_path.write_text(content, encoding="utf-8")
        print(f"Generated {out_path} ({len(content)} chars)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
