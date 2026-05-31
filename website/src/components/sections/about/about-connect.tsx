export function AboutConnect() {
  return (
    <section className="py-4xl px-lg md:px-3xl text-center reveal-on-scroll">
      <div className="max-w-reading-width mx-auto space-y-xl">
        <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md text-primary tracking-tight">
          Let&apos;s connect
        </h2>
        <p className="font-body-lg text-text-secondary leading-relaxed">
          Interested in the technical framework or want to discuss a potential collaboration? My inbox is always open
          for those who value craft.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-lg">
          <a
            className="flex items-center space-x-sm font-label-md text-label-md text-primary hover:text-secondary transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined" aria-hidden>
              mail
            </span>
            <span>Inquiries</span>
          </a>
          <a
            className="flex items-center space-x-sm font-label-md text-label-md text-primary hover:text-secondary transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined" aria-hidden>
              folder
            </span>
            <span>Repository</span>
          </a>
          <a
            className="flex items-center space-x-sm font-label-md text-label-md text-primary hover:text-secondary transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined" aria-hidden>
              rss_feed
            </span>
            <span>Channels</span>
          </a>
        </div>
      </div>
    </section>
  );
}
