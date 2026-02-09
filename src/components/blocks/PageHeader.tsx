export function PageHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="section-pad bg-green text-cream">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="surface p-6 md:p-8">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
            <p className="text-base leading-7 text-cream-80 max-w-[65ch] md:text-lg">{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
