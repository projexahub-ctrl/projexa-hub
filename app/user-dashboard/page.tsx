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
    <main className="
    min-h-screen
    bg-[#020617]
    text-white
    ">

      <div className="
      mx-auto
      max-w-7xl
      px-6
      py-32
      ">

        <div className="
        flex items-center justify-between
        ">

          <div>

            <h1 className="
            text-5xl
            font-black
            ">
              My Dashboard
            </h1>

            <p className="
            mt-3
            text-slate-400
            ">
              Manage your engineering projects and services.
            </p>

          </div>

        </div>

        <div className="
        mt-16
        grid gap-8
        md:grid-cols-2
        lg:grid-cols-4
        ">

          {cards.map((card, index) => {

            const Icon = card.icon

            return (

              <div
                key={index}

                className="
                glass
                rounded-3xl
                p-8
                "
              >

                <div className="
                flex items-center justify-between
                ">

                  <div>

                    <p className="
                    text-slate-400
                    ">
                      {card.title}
                    </p>

                    <h2 className="
                    mt-3
                    text-4xl
                    font-black
                    ">
                      {card.value}
                    </h2>

                  </div>

                  <div className="
                  flex h-14 w-14 items-center justify-center
                  rounded-2xl
                  bg-gradient-to-r
                  from-blue-600
                  to-purple-600
                  ">

                    <Icon className="
                    h-7 w-7 text-white
                    " />

                  </div>

                </div>

              </div>

            )
          })}

        </div>

        <div className="
        glass
        mt-12
        rounded-3xl
        p-8
        ">

          <h2 className="
          text-3xl
          font-black
          ">
            Active Projects
          </h2>

          <div className="
          mt-8
          space-y-6
          ">

            <div className="
            flex items-center justify-between
            rounded-2xl
            bg-white/5
            p-6
            ">

              <div>

                <h3 className="
                text-xl
                font-bold
                ">
                  Smart Stair Cleaning Robot
                </h3>

                <p className="
                mt-2
                text-slate-400
                ">
                  Robotics Project
                </p>

              </div>

              <span className="
              rounded-full
              bg-green-500/20
              px-4 py-2
              text-green-400
              ">
                Ongoing
              </span>

            </div>

            <div className="
            flex items-center justify-between
            rounded-2xl
            bg-white/5
            p-6
            ">

              <div>

                <h3 className="
                text-xl
                font-bold
                ">
                  AI Attendance System
                </h3>

                <p className="
                mt-2
                text-slate-400
                ">
                  AI/ML Project
                </p>

              </div>

              <span className="
              rounded-full
              bg-blue-500/20
              px-4 py-2
              text-blue-400
              ">
                Completed
              </span>

            </div>

          </div>

        </div>

      </div>

    </main>
  )
}