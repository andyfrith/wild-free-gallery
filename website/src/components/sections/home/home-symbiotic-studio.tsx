import { HOME_DOMAIN_ITEMS } from "@/lib/home-content";

type DomainCardProps = {
  icon: string;
  title: string;
  items: readonly string[];
};

function DomainCard({ icon, title, items }: DomainCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-md p-2xl rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
      <div className="flex items-center gap-md mb-lg">
        <span className="material-symbols-outlined text-5xl text-primary-fixed font-thin" aria-hidden>
          {icon}
        </span>
        <h3 className="font-headline-sm text-2xl text-white editorial-spacing font-semibold">{title}</h3>
      </div>
      <ul className="space-y-md">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-md group">
            <span
              className="material-symbols-outlined text-primary-fixed mt-1 group-hover:scale-125 transition-transform"
              aria-hidden
            >
              verified
            </span>
            <span className="font-medium">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function HomeSymbioticStudio() {
  return (
    <section className="bg-primary text-on-primary py-4xl relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden
      />
      <div className="max-w-content-width mx-auto px-lg relative z-10">
        <div className="max-w-reading-width mx-auto text-center mb-3xl">
          <h2 className="font-headline-md text-headline-md text-white mb-md editorial-spacing">
            The <span className="italic font-light">Symbiotic</span> Studio
          </h2>
          <p className="font-body-lg text-body-lg text-on-primary-container/90 max-w-[600px] mx-auto">
            We define clear boundaries for human creativity and machine scale. This division of labor is our
            secret weapon.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-2xl">
          <DomainCard icon="person" title="Human Domain" items={HOME_DOMAIN_ITEMS.human} />
          <DomainCard icon="smart_toy" title="AI Domain" items={HOME_DOMAIN_ITEMS.ai} />
        </div>
      </div>
    </section>
  );
}
