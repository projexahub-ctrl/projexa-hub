export default function ContactSection() {
  return (
    <section className="py-32">

      <div className="mx-auto max-w-4xl px-6">

        <div className="glass rounded-[40px] p-12">

          <h2 className="text-center text-5xl font-black">
            Contact{" "}
            <span className="gradient-text">
              ProjexaHub
            </span>
          </h2>

          <div className="mt-10 grid gap-6">

            <input
              placeholder="Your Name"
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white outline-none"
            />

            <input
              placeholder="Email Address"
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white outline-none"
            />

            <textarea
              placeholder="Describe your project..."
              rows={6}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white outline-none"
            />

            <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-5 font-semibold">
              Submit Inquiry
            </button>

          </div>

        </div>

      </div>

    </section>
  )
}