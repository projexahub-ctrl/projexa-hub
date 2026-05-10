"use client"

import Link from "next/link"

import {
  useEffect,
  useState,
} from "react"

import {
  onAuthStateChanged,
  signOut,
} from "firebase/auth"

import { auth }
from "../app/lib/firebase"

export default function Navbar() {

  const [user, setUser] =
    useState<any>(null)

  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(
        auth,
        (currentUser) => {

          setUser(currentUser)

        }
      )

    return () => unsubscribe()

  }, [])

  async function handleLogout() {

    try {

      await signOut(auth)

    } catch (error) {

      console.log(error)

    }

  }

  return (
    <header
      className="
      fixed
      left-0
      top-0
      z-50

      w-full

      px-6
      py-6
      "
    >

      <div
        className="
        mx-auto
        flex
        max-w-7xl

        items-center
        justify-between

        rounded-[28px]

        border border-white/10

        bg-[#0f172a]/80

        px-8 py-5

        backdrop-blur-xl
        "
      >

        <Link href="/">

          <h1
            className="
            text-4xl
            font-black

            gradient-text
            "
          >
            ProjexaHub
          </h1>

        </Link>

        <nav
          className="
          hidden

          items-center
          gap-10

          md:flex
          "
        >

          <Link href="/">
            Home
          </Link>

          <Link href="/projects">
            Projects
          </Link>

          <Link href="/ai_generator">
            AI Generator
          </Link>

          <Link href="/pricing">
            Pricing
          </Link>

          <Link href="/submit-project">
            Submit Project
          </Link>

          <Link href="/contact">
            Contact
          </Link>

        </nav>

        <div
          className="
          flex
          items-center
          gap-4
          "
        >

          {user ? (

            <>

              <Link href="/dashboard">

                <button
                  className="
                  rounded-2xl

                  border border-white/10

                  bg-white/5

                  px-5 py-3

                  font-semibold
                  "
                >
                  Dashboard
                </button>

              </Link>

              <button
                onClick={handleLogout}

                className="
                rounded-2xl

                bg-gradient-to-r
                from-red-500
                to-pink-500

                px-5 py-3

                font-semibold
                "
              >
                Logout
              </button>

            </>

          ) : (

            <Link href="/auth">

              <button
                className="
                rounded-2xl

                bg-gradient-to-r
                from-blue-600
                to-purple-600

                px-5 py-3

                font-semibold
                "
              >
                Login
              </button>

            </Link>

          )}

        </div>

      </div>

    </header>
  )
}