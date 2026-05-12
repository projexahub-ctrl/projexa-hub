"use client"

import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
} from "lucide-react"

export default function ContactPage() {

  return (

    <main
      className="
      min-h-screen
      bg-[#f8fafc]
      px-6
      py-32
      text-black
      "
    >

      <div
        className="
        mx-auto
        max-w-7xl
        "
      >

        {/* HEADER */}

        <div className="text-center">

          <div
            className="
            inline-flex
            rounded-full
            bg-blue-100
            px-5
            py-2
            text-sm
            font-medium
            text-blue-700
            "
          >
            CONTACT PROJEXAHUB
          </div>

          <h1
            className="
            mt-8
            text-6xl
            font-black
            leading-tight
            "
          >
            Let’s Build
            <br />
            Something Great
          </h1>

          <p
            className="
            mx-auto
            mt-8
            max-w-3xl
            text-xl
            leading-9
            text-gray-600
            "
          >
            Contact our team for engineering
            projects, AI solutions, IoT systems,
            robotics and technical guidance.
          </p>

        </div>

        {/* MAIN GRID */}

        <div
          className="
          mt-24
          grid
          gap-10

          lg:grid-cols-2
          "
        >

          {/* CONTACT FORM */}

          <div
            className="
            rounded-[32px]
            border
            border-gray-200
            bg-white
            p-10
            shadow-sm
            "
          >

            <h2
              className="
              text-4xl
              font-black
              "
            >
              Send Message
            </h2>

            <p
              className="
              mt-4
              text-gray-600
              "
            >
              Fill your details and our team will contact you soon.
            </p>

            <div
              className="
              mt-10
              grid
              gap-6
              "
            >

              <input
                placeholder="Full Name"

                className="
                h-14
                rounded-2xl
                border
                border-gray-300
                px-5
                outline-none
                "
              />

              <input
                placeholder="Email Address"

                className="
                h-14
                rounded-2xl
                border
                border-gray-300
                px-5
                outline-none
                "
              />

              <input
                placeholder="Phone Number"

                className="
                h-14
                rounded-2xl
                border
                border-gray-300
                px-5
                outline-none
                "
              />

              <textarea
                rows={7}

                placeholder="Describe your project idea..."

                className="
                rounded-2xl
                border
                border-gray-300
                p-5
                outline-none
                "
              />

              <button
                className="
                h-14
                rounded-2xl
                bg-black
                text-lg
                font-semibold
                text-white
                transition
                hover:bg-gray-800
                "
              >
                Send Message
              </button>

            </div>

          </div>

          {/* CONTACT INFO */}

          <div className="space-y-6">

            <div
              className="
              flex
              items-center
              gap-5

              rounded-[28px]

              border
              border-gray-200

              bg-white

              p-8

              shadow-sm
              "
            >

              <div
                className="
                flex
                h-16
                w-16
                items-center
                justify-center

                rounded-2xl

                bg-blue-100
                "
              >

                <Mail
                  className="
                  h-7
                  w-7
                  text-blue-600
                  "
                />

              </div>

              <div>

                <p
                  className="
                  text-sm
                  text-gray-500
                  "
                >
                  Email
                </p>

                <h3
                  className="
                  mt-1
                  text-xl
                  font-semibold
                  "
                >
                  support@projexahub.in
                </h3>

              </div>

            </div>

            <div
              className="
              flex
              items-center
              gap-5

              rounded-[28px]

              border
              border-gray-200

              bg-white

              p-8

              shadow-sm
              "
            >

              <div
                className="
                flex
                h-16
                w-16
                items-center
                justify-center

                rounded-2xl

                bg-green-100
                "
              >

                <Phone
                  className="
                  h-7
                  w-7
                  text-green-600
                  "
                />

              </div>

              <div>

                <p
                  className="
                  text-sm
                  text-gray-500
                  "
                >
                  Phone
                </p>

                <h3
                  className="
                  mt-1
                  text-xl
                  font-semibold
                  "
                >
                  +91 8088046553
                </h3>

              </div>

            </div>

            <div
              className="
              flex
              items-center
              gap-5

              rounded-[28px]

              border
              border-gray-200

              bg-white

              p-8

              shadow-sm
              "
            >

              <div
                className="
                flex
                h-16
                w-16
                items-center
                justify-center

                rounded-2xl

                bg-purple-100
                "
              >

                <MapPin
                  className="
                  h-7
                  w-7
                  text-purple-600
                  "
                />

              </div>

              <div>

                <p
                  className="
                  text-sm
                  text-gray-500
                  "
                >
                  Location
                </p>

                <h3
                  className="
                  mt-1
                  text-xl
                  font-semibold
                  "
                >
                  Bangalore, India
                </h3>

              </div>

            </div>

            <div
              className="
              flex
              items-center
              gap-5

              rounded-[28px]

              border
              border-gray-200

              bg-white

              p-8

              shadow-sm
              "
            >

              <div
                className="
                flex
                h-16
                w-16
                items-center
                justify-center

                rounded-2xl

                bg-green-100
                "
              >

                <MessageCircle
                  className="
                  h-7
                  w-7
                  text-green-600
                  "
                />

              </div>

              <div>

                <p
                  className="
                  text-sm
                  text-gray-500
                  "
                >
                  WhatsApp
                </p>

                <h3
                  className="
                  mt-1
                  text-xl
                  font-semibold
                  "
                >
                  Chat With Us
                </h3>

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>

  )

}