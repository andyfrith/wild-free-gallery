import { Button } from "@/components/ui/button";

export function ArtifactsAuditTable() {
  return (
    <section className="mb-4xl px-lg">
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
            />
          </div>
          <Button variant="toolbar" size="sm">
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
            <tr className="hover:bg-bg-primary transition-all cursor-pointer group">
              <td className="px-xl py-lg text-[11px] font-mono text-text-muted">AUD-2023-092</td>
              <td className="px-xl py-lg">
                <div className="font-bold text-text-primary group-hover:text-primary transition-colors">
                  Mobile Experience Audit v2.1
                </div>
                <div className="text-[10px] text-text-muted mt-0.5">Author: Wild Free Research Lab</div>
              </td>
              <td className="px-xl py-lg">
                <span className="border border-outline-variant px-2 py-0.5 rounded text-[10px] font-medium text-text-secondary">
                  UX_ANALYTICS
                </span>
              </td>
              <td className="px-xl py-lg text-sm text-text-secondary">Oct 12, 2023</td>
              <td className="px-xl py-lg text-right">
                <span className="text-semantic-success text-[11px] font-bold flex items-center justify-end gap-1.5">
                  <span className="material-symbols-outlined text-sm" aria-hidden>
                    verified
                  </span>{" "}
                  VERIFIED
                </span>
              </td>
            </tr>
            <tr className="hover:bg-bg-primary transition-all cursor-pointer group">
              <td className="px-xl py-lg text-[11px] font-mono text-text-muted">SEC-2023-044</td>
              <td className="px-xl py-lg">
                <div className="font-bold text-text-primary group-hover:text-primary transition-colors">
                  API Layer Security Protocol
                </div>
                <div className="text-[10px] text-text-muted mt-0.5">Author: Core Infrastructure Team</div>
              </td>
              <td className="px-xl py-lg">
                <span className="border border-outline-variant px-2 py-0.5 rounded text-[10px] font-medium text-text-secondary">
                  SECURITY
                </span>
              </td>
              <td className="px-xl py-lg text-sm text-text-secondary">Sep 28, 2023</td>
              <td className="px-xl py-lg text-right">
                <span className="text-semantic-success text-[11px] font-bold flex items-center justify-end gap-1.5">
                  <span className="material-symbols-outlined text-sm" aria-hidden>
                    verified
                  </span>{" "}
                  VERIFIED
                </span>
              </td>
            </tr>
            <tr className="hover:bg-bg-primary transition-all cursor-pointer group">
              <td className="px-xl py-lg text-[11px] font-mono text-text-muted">SYS-2023-012</td>
              <td className="px-xl py-lg">
                <div className="font-bold text-text-primary group-hover:text-primary transition-colors">
                  Neural Image Generation Weights
                </div>
                <div className="text-[10px] text-text-muted mt-0.5">Author: AI Ethics Board</div>
              </td>
              <td className="px-xl py-lg">
                <span className="border border-outline-variant px-2 py-0.5 rounded text-[10px] font-medium text-text-secondary">
                  AI_SYSTEMS
                </span>
              </td>
              <td className="px-xl py-lg text-sm text-text-secondary">Aug 15, 2023</td>
              <td className="px-xl py-lg text-right">
                <span className="text-semantic-warning text-[11px] font-bold flex items-center justify-end gap-1.5">
                  <span className="material-symbols-outlined text-sm" aria-hidden>
                    hourglass_empty
                  </span>{" "}
                  PENDING_REVIEW
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="p-md bg-surface-container-low text-center">
          <Button variant="link" size="sm" className="h-auto font-bold text-label-sm">
            Load Full Archive History (142 Records)
          </Button>
        </div>
      </div>
    </section>
  );
}
