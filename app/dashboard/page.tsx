"use client"

import {
  useEffect,
  useState,
} from "react"

import { useRouter } from "next/navigation"

import {
  onAuthStateChanged,
  signOut,
} from "firebase/auth"

import { auth } from "../lib/firebase"

export default function DashboardPage() {

  const router = useRouter()

  const [user, setUser] =
    useState<any>(null)

  const [loading, setLoading] =
    useState(true)

  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(
        auth,
        (currentUser) => {

          if (!currentUser) {

            router.push("/auth")

          } else {

            setUser(currentUser)

          }

          setLoading(false)

        }
      )

    return () => unsubscribe()

  }, [router])

  async function handleLogout() {

    await signOut(auth)

    router.push("/auth")

  }

  if (loading) {

    return (
      <main
        className="
        min-h-screen
        bg-[#060816]

        flex
        items-center
        justify-center

        text-white
        "
      >
        Loading...
      </main>
    )

  }

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
            items-center
            justify-between
            "
          >

            <div>

              <h1
                className="
                text-5xl
                font-black
                "
              >
                Dashboard 🚀
              </h1>

              <p
                className="
                mt-4
                text-slate-400
                "
              >
                Welcome back,
                {" "}
                {user?.email}
              </p>

            </div>

            <button
              onClick={handleLogout}

              className="
              rounded-2xl

              bg-gradient-to-r
              from-red-500
              to-pink-500

              px-6 py-4

              font-bold
              "
            >
              Logout
            </button>

          </div>

        </div>

      </div>

    </main>
  )
}