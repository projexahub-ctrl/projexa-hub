"use client"

import { Button } from "@/components/ui/button"

export default function SettingsPage() {

  return (

    <main
      className="
      min-h-screen
      bg-gray-50
      px-6
      py-32
      "
    >

      <div
        className="
        mx-auto
        max-w-5xl
        "
      >

        {/* HEADER */}

        <div>

          <div
            className="
            inline-flex
            rounded-full
            bg-blue-100
            px-4
            py-2
            text-sm
            font-medium
            text-blue-700
            "
          >
            ACCOUNT SETTINGS
          </div>

          <h1
            className="
            mt-6
            text-5xl
            font-bold
            text-gray-900

            md:text-6xl
            "
          >
            Manage Your Account
          </h1>

          <p
            className="
            mt-6
            text-lg
            leading-8
            text-gray-600
            "
          >
            Update your ProjexaHub profile, preferences
            and account information.
          </p>

        </div>

        {/* SETTINGS CARD */}

        <div
          className="
          mt-16
          rounded-3xl
          border
          border-gray-200
          bg-white
          p-10
          shadow-sm
          "
        >

          {/* PROFILE */}

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

              bg-black

              text-4xl
              font-bold
              text-white
              "
            >
              P
            </div>

            <div>

              <h2
                className="
                text-3xl
                font-bold
                text-black
                "
              >
                Purushotham
              </h2>

              <p
                className="
                mt-2
                text-gray-500
                "
              >
                purushotham@projexahub.com
              </p>

            </div>

          </div>

          {/* FORM */}

          <div
            className="
            mt-12
            grid
            gap-6
            "
          >

            <input
              placeholder="Full Name"

              className="
              rounded-xl
              border
              border-gray-300
              bg-white

              p-4
              text-black

              outline-none
              focus:border-black
              "
            />

            <input
              type="email"

              placeholder="Email Address"

              className="
              rounded-xl
              border
              border-gray-300
              bg-white

              p-4
              text-black

              outline-none
              focus:border-black
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
              focus:border-black
              "
            />

            <input
              type="password"

              placeholder="New Password"

              className="
              rounded-xl
              border
              border-gray-300
              bg-white

              p-4
              text-black

              outline-none
              focus:border-black
              "
            />

            {/* NOTIFICATION */}

            <div
              className="
              flex
              items-center
              justify-between

              rounded-2xl
              border
              border-gray-200

              bg-gray-50

              p-5
              "
            >

              <div>

                <h3
                  className="
                  text-lg
                  font-semibold
                  text-black
                  "
                >
                  Email Notifications
                </h3>

                <p
                  className="
                  mt-1
                  text-sm
                  text-gray-500
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

                bg-black
                "
              />

            </div>

            {/* BUTTON */}

            <Button
              className="
              rounded-xl

              bg-black

              py-6
              text-lg
              text-white

              hover:bg-gray-800
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