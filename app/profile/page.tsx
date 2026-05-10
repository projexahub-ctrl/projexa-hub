"use client"

import {
  FolderKanban,
  Star,
  Clock3,
  BadgeCheck,
} from "lucide-react"

export default function ProfilePage() {
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
        max-w-6xl
        "
      >

        <div
          className="
          glass
          rounded-[40px]
          p-10
          "
        >

          <div
            className="
            flex
            flex-col
            items-center
            gap-8

            md:flex-row
            "
          >

            <div
              className="
              flex
              h-36
              w-36
              items-center
              justify-center

              rounded-full

              bg-gradient-to-r
              from-blue-600
              to-purple-600

              text-5xl
              font-black
              "
            >
              P
            </div>

            <div className="flex-1">

              <div
                className="
                flex
                flex-col
                gap-4

                md:flex-row
                md:items-center
                md:justify-between
                "
              >

                <div>

                  <div
                    className="
                    flex
                    items-center
                    gap-3
                    "
                  >

                    <h1
                      className="
                      text-5xl
                      font-black
                      "
                    >
                      Purushotham
                    </h1>

                    <BadgeCheck
                      className="
                      h-8
                      w-8
                      text-blue-400
                      "
                    />

                  </div>

                  <p
                    className="
                    mt-3
                    text-lg
                    text-slate-400
                    "
                  >
                    Founder of ProjexaHub • Engineering Innovator
                  </p>

                </div>

                <button
                  className="
                  rounded-2xl
                  bg-gradient-to-r
                  from-blue-600
                  to-purple-600

                  px-6
                  py-4
                  font-semibold
                  "
                >
                  Edit Profile
                </button>

              </div>

              <div
                className="
                mt-10
                grid gap-6

                md:grid-cols-3
                "
              >

                <div
                  className="
                  rounded-3xl
                  bg-white/[0.04]
                  p-6
                  "
                >

                  <div
                    className="
                    flex items-center gap-4
                    "
                  >

                    <FolderKanban
                      className="
                      h-8
                      w-8
                      text-purple-400
                      "
                    />

                    <div>

                      <p
                        className="
                        text-slate-400
                        "
                      >
                        Projects
                      </p>

                      <h2
                        className="
                        mt-1
                        text-3xl
                        font-black
                        "
                      >
                        24
                      </h2>

                    </div>

                  </div>

                </div>

                <div
                  className="
                  rounded-3xl
                  bg-white/[0.04]
                  p-6
                  "
                >

                  <div
                    className="
                    flex items-center gap-4
                    "
                  >

                    <Star
                      className="
                      h-8
                      w-8
                      text-yellow-400
                      "
                    />

                    <div>

                      <p
                        className="
                        text-slate-400
                        "
                      >
                        Rating
                      </p>

                      <h2
                        className="
                        mt-1
                        text-3xl
                        font-black
                        "
                      >
                        4.9
                      </h2>

                    </div>

                  </div>

                </div>

                <div
                  className="
                  rounded-3xl
                  bg-white/[0.04]
                  p-6
                  "
                >

                  <div
                    className="
                    flex items-center gap-4
                    "
                  >

                    <Clock3
                      className="
                      h-8
                      w-8
                      text-green-400
                      "
                    />

                    <div>

                      <p
                        className="
                        text-slate-400
                        "
                      >
                        Experience
                      </p>

                      <h2
                        className="
                        mt-1
                        text-3xl
                        font-black
                        "
                      >
                        3Y+
                      </h2>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        <div
          className="
          mt-10
          grid gap-8

          lg:grid-cols-2
          "
        >

          <div
            className="
            glass
            rounded-[40px]
            p-8
            "
          >

            <h2
              className="
              text-3xl
              font-black
              "
            >
              About
            </h2>

            <p
              className="
              mt-6
              leading-relaxed
              text-slate-400
              "
            >
              Passionate engineering innovator building affordable and advanced engineering project solutions through ProjexaHub.
            </p>

          </div>

          <div
            className="
            glass
            rounded-[40px]
            p-8
            "
          >

            <h2
              className="
              text-3xl
              font-black
              "
            >
              Skills
            </h2>

            <div
              className="
              mt-6
              flex flex-wrap gap-4
              "
            >

              {[
                "AI / ML",
                "Robotics",
                "IoT",
                "React",
                "Next.js",
                "Embedded Systems",
              ].map((skill, index) => (

                <div
                  key={index}

                  className="
                  rounded-full
                  border border-white/10

                  bg-white/[0.05]

                  px-4
                  py-2

                  text-slate-300
                  "
                >
                  {skill}
                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </main>
  )
}