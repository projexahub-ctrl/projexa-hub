"use client"

import { Button } from "@/components/ui/button"

export default function SettingsPage() {
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
        max-w-5xl
        "
      >

        <div>

          <h1
            className="
            text-5xl
            font-black

            md:text-6xl
            "
          >

            Account{" "}

            <span className="gradient-text">
              Settings
            </span>

          </h1>

          <p
            className="
            mt-6
            text-lg
            text-slate-400
            "
          >
            Manage your ProjexaHub account preferences.
          </p>

        </div>

        <div
          className="
          glass
          mt-16
          rounded-[40px]
          p-10
          "
        >

          <div
            className="
            flex
            flex-col
            items-center
            gap-6

            md:flex-row
            "
          >

            <div
              className="
              flex
              h-28
              w-28
              items-center
              justify-center

              rounded-full

              bg-gradient-to-r
              from-blue-600
              to-purple-600

              text-4xl
              font-black
              "
            >
              P
            </div>

            <div>

              <h2
                className="
                text-3xl
                font-black
                "
              >
                Purushotham
              </h2>

              <p
                className="
                mt-2
                text-slate-400
                "
              >
                purushotham@projexahub.com
              </p>

            </div>

          </div>

          <div
            className="
            mt-12
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

            <input
              placeholder="Phone Number"

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
              type="password"

              placeholder="New Password"

              className="
              rounded-2xl
              border border-white/10
              bg-white/[0.05]

              p-5
              text-white

              outline-none
              "
            />

            <div
              className="
              flex
              items-center
              justify-between

              rounded-2xl
              border border-white/10

              bg-white/[0.03]

              p-5
              "
            >

              <div>

                <h3
                  className="
                  text-lg
                  font-semibold
                  "
                >
                  Email Notifications
                </h3>

                <p
                  className="
                  mt-1
                  text-sm
                  text-slate-400
                  "
                >
                  Receive updates about projects and services.
                </p>

              </div>

              <button
                className="
                h-8
                w-14

                rounded-full

                bg-gradient-to-r
                from-blue-600
                to-purple-600
                "
              />

            </div>

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
              Save Changes
            </Button>

          </div>

        </div>

      </div>

    </main>
  )
}