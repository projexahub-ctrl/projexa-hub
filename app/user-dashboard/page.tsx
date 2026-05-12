"use client"

import {
  Folder,
  Clock,
  IndianRupee,
  Bot,
} from "lucide-react"

const cards = [

  {
    title: "Projects",
    value: "4",
    icon: Folder,
  },

  {
    title: "Pending",
    value: "2",
    icon: Clock,
  },

  {
    title: "Payments",
    value: "₹18,000",
    icon: IndianRupee,
  },

  {
    title: "AI Generations",
    value: "12",
    icon: Bot,
  },

]

export default function UserDashboardPage() {

  return (

    <main
      className="
      min-h-screen
      bg-gray-50
      "
    >

      <div
        className="
        mx-auto
        max-w-7xl
        px-6
        py-32
        "
      >

        {/* HEADER */}

        <div
          className="
          flex
          flex-col
          gap-6

          md:flex-row
          md:items-center
          md:justify-between
          "
        >

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
              USER DASHBOARD
            </div>

            <h1
              className="
              mt-6
              text-5xl
              font-bold
              text-gray-900
              "
            >
              My Dashboard
            </h1>

            <p
              className="
              mt-4
              text-lg
              text-gray-600
              "
            >
              Manage your engineering projects and services.
            </p>

          </div>

        </div>

        {/* CARDS */}

        <div
          className="
          mt-16
          grid
          gap-8

          md:grid-cols-2
          lg:grid-cols-4
          "
        >

          {cards.map((card, index) => {

            const Icon = card.icon

            return (

              <div
                key={index}

                className="
                rounded-3xl
                border
                border-gray-200
                bg-white
                p-8

                shadow-sm

                transition-all
                duration-300

                hover:-translate-y-1
                hover:shadow-xl
                "
              >

                <div
                  className="
                  flex
                  items-center
                  justify-between
                  "
                >

                  <div>

                    <p
                      className="
                      text-gray-500
                      "
                    >
                      {card.title}
                    </p>

                    <h2
                      className="
                      mt-4
                      text-4xl
                      font-extrabold
                      text-black
                      "
                    >
                      {card.value}
                    </h2>

                  </div>

                  <div
                    className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center

                    rounded-2xl

                    bg-black
                    "
                  >

                    <Icon
                      className="
                      h-7
                      w-7
                      text-white
                      "
                    />

                  </div>

                </div>

              </div>

            )

          })}

        </div>

        {/* ACTIVE PROJECTS */}

        <div
          className="
          mt-14
          rounded-3xl
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
            items-center
            justify-between
            "
          >

            <h2
              className="
              text-3xl
              font-bold
              text-black
              "
            >
              Active Projects
            </h2>

            <button
              className="
              rounded-xl
              border
              border-gray-300
              px-5
              py-2
              text-sm
              font-medium
              text-black

              transition
              hover:bg-gray-100
              "
            >
              View All
            </button>

          </div>

          <div
            className="
            mt-8
            space-y-6
            "
          >

            {/* PROJECT 1 */}

            <div
              className="
              flex
              flex-col
              gap-6

              rounded-2xl
              border
              border-gray-200
              bg-gray-50
              p-6

              md:flex-row
              md:items-center
              md:justify-between
              "
            >

              <div>

                <h3
                  className="
                  text-2xl
                  font-semibold
                  text-black
                  "
                >
                  Smart Stair Cleaning Robot
                </h3>

                <p
                  className="
                  mt-2
                  text-gray-600
                  "
                >
                  Robotics Project
                </p>

              </div>

              <span
                className="
                w-fit
                rounded-full
                bg-green-100
                px-4
                py-2
                text-sm
                font-medium
                text-green-700
                "
              >
                Ongoing
              </span>

            </div>

            {/* PROJECT 2 */}

            <div
              className="
              flex
              flex-col
              gap-6

              rounded-2xl
              border
              border-gray-200
              bg-gray-50
              p-6

              md:flex-row
              md:items-center
              md:justify-between
              "
            >

              <div>

                <h3
                  className="
                  text-2xl
                  font-semibold
                  text-black
                  "
                >
                  AI Attendance System
                </h3>

                <p
                  className="
                  mt-2
                  text-gray-600
                  "
                >
                  AI/ML Project
                </p>

              </div>

              <span
                className="
                w-fit
                rounded-full
                bg-blue-100
                px-4
                py-2
                text-sm
                font-medium
                text-blue-700
                "
              >
                Completed
              </span>

            </div>

          </div>

        </div>

      </div>

    </main>

  )
}