import Image from "next/image";

export default function ZtrackmapLanding() {
  return (
    <main className="bg-neutral-950 text-neutral-100">
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-lime-400">
              smart grazing · gps · iot
            </p>

            <h1 className="mt-4 text-4xl sm:text-5xl xl:text-6xl font-semibold leading-tight">
              ztrackmap
            </h1>

            <p className="mt-6 text-lg text-neutral-300 max-w-xl">
              Making grazing easier with smart activity sensors and GPS tracking —
              so animals, land, and people can stay in harmony.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#solution"
                className="rounded-full bg-lime-400 px-8 py-3 text-neutral-900 font-medium hover:bg-lime-300 transition"
              >
                see the solution
              </a>

              <a
                href="#map"
                className="rounded-full border border-neutral-700 px-8 py-3 font-medium hover:border-neutral-500 transition"
              >
                map application
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-[280px] sm:w-[320px] aspect-[9/19] rounded-[2.5rem] border border-neutral-800 bg-neutral-900 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-8 bg-neutral-900 z-10" />
              <div className="absolute inset-0">
                <Image
                  src="/phoneapp.avif"
                  alt="ztrackmap mobile map interface"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="vision" className="border-t border-neutral-900">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <h2 className="text-3xl font-semibold">vision & mission</h2>

          <p className="mt-6 text-neutral-300 leading-relaxed">
            Grazing is hard and exhausting work — and often monotonous, too.
            Keeping an eye on animals is not easy, especially across large areas.
            With smart sensors and GPS tracking, we aim to make grazing simpler,
            safer, and more humane.
          </p>

          <blockquote className="mt-10 border-l-2 border-lime-400 pl-6 text-neutral-400 italic">
            “Technology should not pull us away from nature,
            but gently guide us back to it.”
          </blockquote>

          <p className="mt-6 text-neutral-300 leading-relaxed">
            This is our <span className="text-lime-400">yakamoz</span> —
            a quiet light reflected from the past into the future,
            reminding us why we build what we build.
          </p>
        </div>
      </section>

      <section id="solution" className="bg-neutral-900/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="text-3xl font-semibold">the solution</h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "real-time location",
                desc: "Track herds and flocks on a live map with flexible update intervals.",
              },
              {
                title: "theft & escape alerts",
                desc: "Instant notification if animals scatter, stop moving, or leave a zone.",
              },
              {
                title: "long battery life",
                desc: "NB-IoT + low-power design with solar assistance for months of operation.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-neutral-800 bg-neutral-950 p-8"
              >
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="mt-4 text-neutral-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="map" className="border-t border-neutral-900">
        <div className="mx-auto max-w-7xl px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-semibold">map application</h2>
            <p className="mt-6 text-neutral-300">
              A clear, herd-level overview matters more than tracking every
              individual animal. ztrackmap visualizes groups, anomalies,
              and grazing patterns — not noise.
            </p>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-neutral-900 aspect-video flex items-center justify-center text-neutral-500">
            map preview placeholder
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-900">
        <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col sm:flex-row justify-between gap-6 text-sm text-neutral-500">
          <span>© {new Date().getFullYear()} ztrackmap</span>
          <span>built for grazing, free-range farming & harmony with nature</span>
        </div>
      </footer>
    </main>
  );
}
