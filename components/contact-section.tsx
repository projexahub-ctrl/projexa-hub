export default function ContactSection() {

  return (

    <section
      className="
      bg-gray-50
      py-24
      "
    >

      <div
        className="
        mx-auto
        max-w-6xl
        px-6
        "
      >

        <div
          className="
          grid
          gap-12

          rounded-3xl
          border
          border-gray-200
          bg-white
          p-12
          shadow-sm

          md:grid-cols-2
          "
        >

          {/* LEFT SIDE */}

          <div>

            <div
              className="
              inline-flex
              items-center
              rounded-full
              bg-blue-100
              px-4
              py-2
              text-sm
              font-medium
              text-blue-700
              "
            >
              CONTACT US
            </div>

            <h2
              className="
              mt-6
              text-5xl
              font-bold
              leading-tight
              text-gray-900
              "
            >
              Let’s Build Your
              <br />
              Next Project
            </h2>

            <p
              className="
              mt-6
              text-lg
              leading-8
              text-gray-600
              "
            >
              Reach out to ProjexaHub for final year projects,
              custom engineering solutions, AI-powered systems,
              robotics, IoT and research assistance.
            </p>

            <div className="mt-10 space-y-6">

              <div>

                <h3
                  className="
                  text-lg
                  font-semibold
                  text-black
                  "
                >
                  Email
                </h3>

                <p className="text-gray-600">
                  support@projexahub.in
                </p>

              </div>

              <div>

                <h3
                  className="
                  text-lg
                  font-semibold
                  text-black
                  "
                >
                  Support
                </h3>

                <p className="text-gray-600">
                  24/7 Technical Assistance
                </p>

              </div>

              <div>

                <h3
                  className="
                  text-lg
                  font-semibold
                  text-black
                  "
                >
                  Services
                </h3>

                <p className="text-gray-600">
                  Final Year Projects, IoT, Robotics,
                  AI/ML, Mechanical Systems
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE FORM */}

          <div>

            <div className="grid gap-5">

              <input
                placeholder="Your Name"

                className="
                rounded-xl
                border
                border-gray-300
                bg-white
                p-4
                text-black
                outline-none
                focus:border-blue-500
                "
              />

              <input
                placeholder="Email Address"

                className="
                rounded-xl
                border
                border-gray-300
                bg-white
                p-4
                text-black
                outline-none
                focus:border-blue-500
                "
              />

              <input
                placeholder="Phone Number"

                className="
                rounded-xl
                border
                border-gray-300
                bg-white
                p-4
                text-black
                outline-none
                focus:border-blue-500
                "
              />

              <textarea
                placeholder="Describe your project..."
                rows={6}

                className="
                rounded-xl
                border
                border-gray-300
                bg-white
                p-4
                text-black
                outline-none
                focus:border-blue-500
                "
              />

              <button
                className="
                rounded-xl
                bg-black
                p-4
                font-semibold
                text-white
                transition
                hover:bg-gray-800
                "
              >
                Submit Inquiry
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}