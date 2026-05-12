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
      bg-gray-50
      px-6
      py-32
      "
    >

      <div
        className="
        mx-auto
        max-w-6xl
        "
      >

        {/* PROFILE CARD */}

        <div
          className="
          rounded-3xl
          border
          border-gray-200
          bg-white
          p-10
          shadow-sm
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

            {/* AVATAR */}

            <div
              className="
              flex
              h-36
              w-36
              items-center
              justify-center

              rounded-full

              bg-black

              text-5xl
              font-bold
              text-white
              "
            >
              P
            </div>

            <div className="flex-1">

              {/* TOP */}

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
                      font-bold
                      text-gray-900
                      "
                    >
                      Purushotham
                    </h1>

                    <BadgeCheck
                      className="
                      h-8
                      w-8
                      text-blue-600
                      "
                    />

                  </div>

                  <p
                    className="
                    mt-3
                    text-lg
                    text-gray-600
                    "
                  >
                    Founder of ProjexaHub • Engineering Innovator
                  </p>

                </div>

                <button
                  className="
                  rounded-xl

                  bg-black

                  px-6
                  py-4

                  font-semibold
                  text-white

                  transition
                  hover:bg-gray-800
                  "
                >
                  Edit Profile
                </button>

              </div>

              {/* STATS */}

              <div
                className="
                mt-10
                grid
                gap-6

                md:grid-cols-3
                "
              >

                {/* PROJECTS */}

                <div
                  className="
                  rounded-2xl
                  border
                  border-gray-200

                  bg-gray-50

                  p-6
                  "
                >

                  <div
                    className="
                    flex
                    items-center
                    gap-4
                    "
                  >

                    <FolderKanban
                      className="
                      h-8
                      w-8
                      text-black
                      "
                    />

                    <div>

                      <p
                        className="
                        text-gray-500
                        "
                      >
                        Projects
                      </p>

                      <h2
                        className="
                        mt-1
                        text-3xl
                        font-bold
                        text-black
                        "
                      >
                        24
                      </h2>

                    </div>

                  </div>

                </div>

                {/* RATING */}

                <div
                  className="
                  rounded-2xl
                  border
                  border-gray-200

                  bg-gray-50

                  p-6
                  "
                >

                  <div
                    className="
                    flex
                    items-center
                    gap-4
                    "
                  >

                    <Star
                      className="
                      h-8
                      w-8
                      text-black
                      "
                    />

                    <div>

                      <p
                        className="
                        text-gray-500
                        "
                      >
                        Rating
                      </p>

                      <h2
                        className="
                        mt-1
                        text-3xl
                        font-bold
                        text-black
                        "
                      >
                        4.9
                      </h2>

                    </div>

                  </div>

                </div>

                {/* EXPERIENCE */}

                <div
                  className="
                  rounded-2xl
                  border
                  border-gray-200

                  bg-gray-50

                  p-6
                  "
                >

                  <div
                    className="
                    flex
                    items-center
                    gap-4
                    "
                  >

                    <Clock3
                      className="
                      h-8
                      w-8
                      text-black
                      "
                    />

                    <div>

                      <p
                        className="
                        text-gray-500
                        "
                      >
                        Experience
                      </p>

                      <h2
                        className="
                        mt-1
                        text-3xl
                        font-bold
                        text-black
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

        {/* ABOUT + SKILLS */}

        <div
          className="
          mt-10
          grid
          gap-8

          lg:grid-cols-2
          "
        >

          {/* ABOUT */}

          <div
            className="
            rounded-3xl
            border
            border-gray-200

            bg-white

            p-8

            shadow-sm
            "
          >

            <h2
              className="
              text-3xl
              font-bold
              text-black
              "
            >
              About
            </h2>

            <p
              className="
              mt-6
              leading-8
              text-gray-600
              "
            >
              Passionate engineering innovator building affordable
              and advanced engineering project solutions through
              ProjexaHub with expertise in AI, Robotics, IoT and
              Software Development.
            </p>

          </div>

          {/* SKILLS */}

          <div
            className="
            rounded-3xl
            border
            border-gray-200

            bg-white

            p-8

            shadow-sm
            "
          >

            <h2
              className="
              text-3xl
              font-bold
              text-black
              "
            >
              Skills
            </h2>

            <div
              className="
              mt-6
              flex
              flex-wrap
              gap-4
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
                  border
                  border-gray-300

                  bg-gray-100

                  px-4
                  py-2

                  text-sm
                  font-medium
                  text-gray-700
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