import { Button } from "@/components/ui/button";
import { ARTIFACT_AUDIT_LINKS, ARTIFACT_AUDIT_ROWS } from "@/lib/artifacts-content";

const INTEGRITY_STYLES = {
  VERIFIED: "text-semantic-success",
  CONDITIONAL: "text-semantic-warning",
  PENDING_REVIEW: "text-semantic-warning",
} as const;

const INTEGRITY_ICONS = {
  VERIFIED: "verified",
  CONDITIONAL: "rule",
  PENDING_REVIEW: "hourglass_empty",
} as const;

export function ArtifactsAuditTable() {
  return (
    <section id="audit-repository" className="mb-4xl px-lg scroll-mt-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-xl border-b border-surface-container pb-md">
        <div>
          <span className="metadata-label mb-xs block">Verification Log</span>
          <h2 className="font-headline-sm text-headline-sm tracking-tight">Audit Repository</h2>
        </div>
        <div className="flex gap-sm mt-md md:mt-0">
          <div className="relative">
            <span
              className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted text-md"
              aria-hidden
            >
              search
            </span>
            <input
              className="bg-surface-container-low border-none rounded text-sm pl-10 pr-md py-2.5 focus:ring-1 focus:ring-primary w-64"
              placeholder="Filter by ID or title..."
              type="text"
              disabled
              aria-label="Filter audits (coming soon)"
            />
          </div>
          <Button variant="toolbar" size="sm" disabled>
            <span className="material-symbols-outlined text-md" aria-hidden>
              tune
            </span>
            Filter
          </Button>
        </div>
      </div>
      <div className="bg-bg-surface rounded-lg border border-surface-container overflow-hidden editorial-shadow">
        <table className="w-full text-left precise-table">
          <thead className="bg-surface-container-low text-[10px] text-text-muted uppercase tracking-widest">
            <tr>
              <th className="px-xl py-md font-bold">Ref ID</th>
              <th className="px-xl py-md font-bold">Document Title</th>
              <th className="px-xl py-md font-bold">Classification</th>
              <th className="px-xl py-md font-bold">Last Verification</th>
              <th className="px-xl py-md font-bold text-right">Integrity</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-container-low">
            {ARTIFACT_AUDIT_ROWS.map((row) => (
              <tr key={row.id} className="hover:bg-bg-primary transition-all group">
                <td className="px-xl py-lg text-[11px] font-mono text-text-muted">{row.id}</td>
                <td className="px-xl py-lg">
                  <a
                    href={ARTIFACT_AUDIT_LINKS[row.id]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-text-primary group-hover:text-primary transition-colors"
                  >
                    {row.title}
                  </a>
                  <div className="text-[10px] text-text-muted mt-0.5">Author: {row.author}</div>
                </td>
                <td className="px-xl py-lg">
                  <span className="border border-outline-variant px-2 py-0.5 rounded text-[10px] font-medium text-text-secondary">
                    {row.classification}
                  </span>
                </td>
                <td className="px-xl py-lg text-sm text-text-secondary">{row.date}</td>
                <td className="px-xl py-lg text-right">
                  <span
                    className={`${INTEGRITY_STYLES[row.integrity]} text-[11px] font-bold flex items-center justify-end gap-1.5`}
                  >
                    <span className="material-symbols-outlined text-sm" aria-hidden>
                      {INTEGRITY_ICONS[row.integrity]}
                    </span>
                    {row.integrity}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-md bg-surface-container-low text-center">
          <p className="font-label-sm text-text-muted">Three audits published. Launch review (A-004) planned post-deploy.</p>
        </div>
      </div>
    </section>
  );
}
