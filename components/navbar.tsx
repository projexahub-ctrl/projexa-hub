"use client"

import Link from "next/link"

import Image from "next/image"

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

export default function Navbar() {

  const [user, setUser] =
    useState<User | null>(null)

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

      border-b
      border-gray-200

      bg-white/95

      backdrop-blur-md
      "
    >

      <div
        className="
        mx-auto
        flex
        h-20
        max-w-7xl
        items-center
        justify-between

        px-6
        "
      >

        {/* LOGO */}

        <Link
          href="/"

          className="
          flex
          items-center
          gap-3
          "
        >

          <Image
            src="/logo.jpg"
            alt="ProjexaHub Logo"
            width={55}
            height={55}
            className="
            rounded-xl
            "
          />

          <h1
            className="
            text-3xl
            font-extrabold
            tracking-tight
            text-black
            "
          >
            ProjexaHub
          </h1>

        </Link>

        {/* NAV LINKS */}

        <nav
          className="
          hidden
          items-center
          gap-8

          text-sm
          font-medium
          text-gray-700

          md:flex
          "
        >

          <Link
            href="/"
            className="
            transition
            hover:text-black
            "
          >
            Home
          </Link>

          <Link
            href="/projects"
            className="
            transition
            hover:text-black
            "
          >
            Projects
          </Link>

          <Link
            href="/build-and-earn"
            className="
            transition
            hover:text-black
            "
          >
            Build & Earn
          </Link>

          <Link
            href="/ai-generator"
            className="
            transition
            hover:text-black
            "
          >
            AI Generator
          </Link>

          <Link
            href="/submit-project"
            className="
            transition
            hover:text-black
            "
          >
            Submit Project
          </Link>

          <Link
            href="/contact"
            className="
            transition
            hover:text-black
            "
          >
            Contact
          </Link>

        </nav>

        {/* AUTH BUTTONS */}

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
                  rounded-xl

                  border
                  border-gray-300

                  bg-white

                  px-5
                  py-2.5

                  text-sm
                  font-semibold
                  text-black

                  transition

                  hover:bg-gray-100
                  "
                >
                  Dashboard
                </button>

              </Link>

              <button
                onClick={handleLogout}

                className="
                rounded-xl

                bg-black

                px-5
                py-2.5

                text-sm
                font-semibold
                text-white

                transition

                hover:bg-gray-800
                "
              >
                Logout
              </button>

            </>

          ) : (

            <Link href="/auth">

              <button
                className="
                rounded-xl

                bg-black

                px-5
                py-2.5

                text-sm
                font-semibold
                text-white

                transition

                hover:bg-gray-800
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