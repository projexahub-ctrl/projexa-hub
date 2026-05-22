"use client"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div>
          <h1 className="text-5xl font-bold mb-4">
            Send Message
          </h1>

          <p className="text-gray-600 mb-10">
            Fill your details and our team will contact you soon.
          </p>

          <div className="space-y-6">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-2xl p-5 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-2xl p-5 outline-none"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-2xl p-5 outline-none"
            />

            <textarea
              rows={6}
              placeholder="Describe your project idea..."
              className="w-full border border-gray-300 rounded-2xl p-5 outline-none"
            />

            <button className="w-full bg-black text-white rounded-2xl py-5 text-lg font-semibold">
              Send Message
            </button>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          <div className="border rounded-3xl p-8">
            <p className="text-gray-500">
              Email
            </p>

            <h2 className="text-3xl font-bold mt-2">
              support@projexahub.in
            </h2>
          </div>

          <div className="border rounded-3xl p-8">
            <p className="text-gray-500">
              Phone
            </p>

            <h2 className="text-3xl font-bold mt-2">
              +91 9035964554
            </h2>
          </div>

          <div className="border rounded-3xl p-8">
            <p className="text-gray-500">
              Location
            </p>

            <h2 className="text-3xl font-bold mt-2">
              Bangalore, India
            </h2>
          </div>

          <div className="border rounded-3xl p-8">
            <p className="text-gray-500">
              WhatsApp
            </p>

            <a
              href="https://wa.me/918088046553"
              target="_blank"
              className="text-3xl font-bold mt-2 block"
            >
              Chat With Us
            </a>
          </div>

        </div>

      </div>
    </main>
  )
}