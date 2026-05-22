"use client"

import {
  useEffect,
  useState,
} from "react"

import {
  onAuthStateChanged,
  signOut,
  User,
} from "firebase/auth"

import { auth } from "@/lib/firebase"

import {
  Rocket,
  FolderKanban,
  Sparkles,
  Upload,
  Download,
  BrainCircuit,
  Crown,
  LogOut,
} from "lucide-react"

import { useRouter } from "next/navigation"

export default function DashboardPage() {

  const [user, setUser] =
    useState<User | null>(null)

  const router =
    useRouter()

  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(
        auth,
        (currentUser) => {

          if (!currentUser) {

            router.push("/auth")

          }

          setUser(currentUser)

        }
      )

    return () => unsubscribe()

  }, [router])

  async function handleLogout() {

    try {

      await signOut(auth)

      router.push("/")

    } catch (error) {

      console.log(error)

    }

  }

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
        max-w-7xl
        "
      >

        {/* HERO */}

        <div
          className="
          rounded-[40px]

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
            items-start
            justify-between
            gap-10

            md:flex-row
            md:items-center
            "
          >

            <div>

              <div
                className="
                mb-6

                flex
                h-20
                w-20
                items-center
                justify-center

                rounded-3xl

                bg-gradient-to-r
                from-pink-500
                to-purple-500
                "
              >

                <Rocket
                  className="
                  h-10
                  w-10
                  text-white
                  "
                />

              </div>

              <h1
                className="
                text-5xl
                font-black
                leading-tight
                text-black
                "
              >
                Welcome back 👋
              </h1>

              <p
                className="
                mt-4
                text-lg
                text-gray-600
                "
              >
                {user?.email}
              </p>

              <p
                className="
                mt-2
                max-w-2xl
                text-gray-500
                "
              >
                Build innovative engineering projects,
                generate AI ideas, upload reports,
                and grow with ProjexaHub.
              </p>

            </div>

            <button
              onClick={handleLogout}

              className="
              flex
              items-center
              gap-3

              rounded-2xl

              bg-black

              px-8
              py-4

              font-semibold
              text-white

              transition
              hover:bg-gray-800
              "
            >

              <LogOut
                className="
                h-5
                w-5
                "
              />

              Logout

            </button>

          </div>

        </div>

        {/* STATS */}

        <div
          className="
          mt-12

          grid
          gap-6

          md:grid-cols-4
          "
        >

          {[
            {
              title:
                "Projects",

              value:
                "24",

              icon:
                FolderKanban,
            },

            {
              title:
                "AI Generations",

              value:
                "120",

              icon:
                Sparkles,
            },

            {
              title:
                "Downloads",

              value:
                "58",

              icon:
                Download,
            },

            {
              title:
                "Uploads",

              value:
                "12",

              icon:
                Upload,
            },

          ].map(
            (
              item,
              index
            ) => {

              const Icon =
                item.icon

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

                  transition
                  hover:-translate-y-1
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
                        {item.title}
                      </p>

                      <h2
                        className="
                        mt-3
                        text-4xl
                        font-black
                        text-black
                        "
                      >
                        {item.value}
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

            }
          )}

        </div>

        {/* QUICK ACTIONS */}

        <div className="mt-16">

          <h2
            className="
            text-3xl
            font-black
            text-black
            "
          >
            Quick Actions
          </h2>

          <div
            className="
            mt-8

            grid
            gap-6

            md:grid-cols-3
            "
          >

            {[
              {
                title:
                  "Generate AI Project",

                description:
                  "Create innovative engineering project ideas instantly.",

                icon:
                  Sparkles,

                link:
                  "/ai-generator",
              },

              {
                title:
                  "Upload Project",

                description:
                  "Share your project and earn from your creativity.",

                icon:
                  Upload,

                link:
                  "/submit-project",
              },

              {
                title:
                  "Projexa AI Assistant",

                description:
                  "Get instant help for components, coding and reports.",

                icon:
                  BrainCircuit,

                link:
                  "/ai-generator",
              },

            ].map(
              (
                item,
                index
              ) => {

                const Icon =
                  item.icon

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

                    transition
                    hover:-translate-y-1
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

                      bg-black
                      "
                    >

                      <Icon
                        className="
                        h-8
                        w-8
                        text-white
                        "
                      />

                    </div>

                    <h3
                      className="
                      mt-6
                      text-2xl
                      font-bold
                      text-black
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                      mt-3
                      leading-7
                      text-gray-500
                      "
                    >
                      {item.description}
                    </p>

                    <button
                      onClick={() =>
                        router.push(
                          item.link
                        )
                      }

                      className="
                      mt-6

                      rounded-2xl

                      bg-black

                      px-6
                      py-3

                      font-semibold
                      text-white

                      transition
                      hover:bg-gray-800
                      "
                    >
                      Open
                    </button>

                  </div>

                )

              }
            )}

          </div>

        </div>

        {/* PREMIUM */}

        <div
          className="
          mt-16

          rounded-[40px]

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
            items-start
            justify-between
            gap-8

            md:flex-row
            md:items-center
            "
          >

            <div>

              <div
                className="
                flex
                h-16
                w-16
                items-center
                justify-center

                rounded-2xl

                bg-black
                "
              >

                <Crown
                  className="
                  h-8
                  w-8
                  text-yellow-400
                  "
                />

              </div>

              <h2
                className="
                mt-6
                text-4xl
                font-black
                text-black
                "
              >
                Upgrade to Pro 🚀
              </h2>

              <p
                className="
                mt-4
                max-w-2xl
                text-lg
                text-gray-500
                "
              >
                Unlock unlimited AI generations,
                downloadable reports,
                premium project kits,
                advanced engineering ideas,
                and Projexa AI tools.
              </p>

            </div>

            <button
              className="
              rounded-2xl

              bg-black

              px-8
              py-4

              text-lg
              font-bold
              text-white

              transition
              hover:bg-gray-800
              "
            >
              Upgrade Now
            </button>

          </div>

        </div>

      </div>

    </main>

  )

}