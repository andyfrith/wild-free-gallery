import { ABOUT_CONNECT } from "@/lib/about-content";

export function AboutConnect() {
  return (
    <section className="py-4xl px-lg md:px-3xl text-center reveal-on-scroll">
      <div className="max-w-reading-width mx-auto space-y-xl">
        <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md text-primary tracking-tight">
          {ABOUT_CONNECT.title}
        </h2>
        <p className="font-body-lg text-text-secondary leading-relaxed">{ABOUT_CONNECT.description}</p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-lg">
          {ABOUT_CONNECT.links.map((link) => (
            <a
              key={link.label}
              className="flex items-center space-x-sm font-label-md text-label-md text-primary hover:text-secondary transition-colors"
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
            >
              <span className="material-symbols-outlined" aria-hidden>
                {link.icon}
              </span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
