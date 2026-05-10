"use client"

import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
} from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <main
      className="
      min-h-screen
      bg-[#060816]
      px-6
      py-32
      text-white
      "
    >

      <div
        className="
        mx-auto
        max-w-7xl
        "
      >

        <div className="text-center">

          <h1
            className="
            text-5xl
            font-black

            md:text-7xl
            "
          >

            Contact{" "}

            <span className="gradient-text">
              ProjexaHub
            </span>

          </h1>

          <p
            className="
            mt-6
            text-lg
            text-slate-400
            "
          >
            Get in touch with our team for engineering project solutions.
          </p>

        </div>

        <div
          className="
          mt-20
          grid gap-10

          lg:grid-cols-2
          "
        >

          <div
            className="
            glass
            rounded-[40px]
            p-10
            "
          >

            <h2
              className="
              text-3xl
              font-black
              "
            >
              Send Message
            </h2>

            <div
              className="
              mt-8
              grid gap-6
              "
            >

              <input
                placeholder="Full Name"

                className="
                rounded-2xl
                border border-white/10
                bg-white/[0.05]

                p-5
                text-white

                outline-none
                "
              />

              <input
                type="email"

                placeholder="Email Address"

                className="
                rounded-2xl
                border border-white/10
                bg-white/[0.05]

                p-5
                text-white

                outline-none
                "
              />

              <textarea
                rows={8}

                placeholder="Your Message..."

                className="
                rounded-2xl
                border border-white/10
                bg-white/[0.05]

                p-5
                text-white

                outline-none
                "
              />

              <Button
                className="
                rounded-2xl
                bg-gradient-to-r
                from-blue-600
                to-purple-600

                py-6
                text-lg

                transition
                hover:scale-[1.01]
                "
              >
                Send Message
              </Button>

            </div>

          </div>

          <div
            className="
            space-y-8
            "
          >

            <div
              className="
              glass
              rounded-[40px]
              p-8
              "
            >

              <div
                className="
                flex items-center gap-5
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
                  bg-white/[0.05]
                  "
                >

                  <Mail
                    className="
                    h-8
                    w-8
                    text-blue-400
                    "
                  />

                </div>

                <div>

                  <p
                    className="
                    text-slate-400
                    "
                  >
                    Email
                  </p>

                  <h3
                    className="
                    mt-2
                    text-xl
                    font-bold
                    "
                  >
                    contact@projexahub.com
                  </h3>

                </div>

              </div>

            </div>

            <div
              className="
              glass
              rounded-[40px]
              p-8
              "
            >

              <div
                className="
                flex items-center gap-5
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
                  bg-white/[0.05]
                  "
                >

                  <Phone
                    className="
                    h-8
                    w-8
                    text-green-400
                    "
                  />

                </div>

                <div>

                  <p
                    className="
                    text-slate-400
                    "
                  >
                    Phone
                  </p>

                  <h3
                    className="
                    mt-2
                    text-xl
                    font-bold
                    "
                  >
                    +91 98765 43210
                  </h3>

                </div>

              </div>

            </div>

            <div
              className="
              glass
              rounded-[40px]
              p-8
              "
            >

              <div
                className="
                flex items-center gap-5
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
                  bg-white/[0.05]
                  "
                >

                  <MapPin
                    className="
                    h-8
                    w-8
                    text-purple-400
                    "
                  />

                </div>

                <div>

                  <p
                    className="
                    text-slate-400
                    "
                  >
                    Location
                  </p>

                  <h3
                    className="
                    mt-2
                    text-xl
                    font-bold
                    "
                  >
                    Bangalore, India
                  </h3>

                </div>

              </div>

            </div>

            <div
              className="
              glass
              rounded-[40px]
              p-8
              "
            >

              <div
                className="
                flex items-center gap-5
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
                  bg-white/[0.05]
                  "
                >

                  <MessageCircle
                    className="
                    h-8
                    w-8
                    text-green-400
                    "
                  />

                </div>

                <div>

                  <p
                    className="
                    text-slate-400
                    "
                  >
                    WhatsApp
                  </p>

                  <h3
                    className="
                    mt-2
                    text-xl
                    font-bold
                    "
                  >
                    Chat With Us
                  </h3>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  )
}