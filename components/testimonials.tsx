const testimonials = [
  {
    name: "Rahul",
    college: "VTU",
    review:
      "ProjexaHub helped us complete our final year project professionally.",
  },
  {
    name: "Akhil",
    college: "BMSCE",
    review:
      "The best engineering project platform for students.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-32">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-5xl font-black">
            Student{" "}
            <span className="gradient-text">
              Testimonials
            </span>
          </h2>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {testimonials.map((t, i) => (
            <div
              key={i}
              className="glass rounded-3xl p-10"
            >

              <p className="text-lg leading-relaxed text-slate-300">
                "{t.review}"
              </p>

              <div className="mt-8">
                <h4 className="text-xl font-bold">
                  {t.name}
                </h4>

                <p className="text-slate-400">
                  {t.college}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}