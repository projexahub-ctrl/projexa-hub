"use client"

import { useEffect, useState } from "react"

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth"

import {
  doc,
  setDoc,
} from "firebase/firestore"

import { useRouter } from "next/navigation"

import {
  auth,
  db,
} from "../lib/firebase"

import { Button } from "@/components/ui/button"

export default function AuthPage() {

  const router = useRouter()

  const [isLogin, setIsLogin] =
    useState(true)

  const [email, setEmail] =
    useState("")

  const [password, setPassword] =
    useState("")

  const [name, setName] =
    useState("")

  const [loading, setLoading] =
    useState(false)

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

  async function handleAuth() {

    try {

      setLoading(true)

      if (isLogin) {

        await signInWithEmailAndPassword(
          auth,
          email,
          password
        )

        alert("Login Successful 🚀")

      } else {

        const userCredential =
          await createUserWithEmailAndPassword(
            auth,
            email,
            password
          )

        await setDoc(
          doc(
            db,
            "users",
            userCredential.user.uid
          ),
          {
            name,
            email,
            membership: "FREE",
            role: "student",
            createdAt: new Date(),
          }
        )

        alert("Account Created 🚀")

      }

      router.push("/dashboard")

    } catch (error: any) {

      alert(error.message)

    } finally {

      setLoading(false)

    }

  }

  async function handleLogout() {

    await signOut(auth)

    alert("Logged out")

  }

  return (

    <main
      className="
      flex
      min-h-screen
      items-center
      justify-center

      bg-gray-50

      px-6
      py-20
      "
    >

      <div
        className="
        w-full
        max-w-md

        rounded-3xl

        border
        border-gray-200

        bg-white

        p-10

        shadow-sm
        "
      >

        {/* HEADER */}

        <div className="text-center">

          <div
            className="
            mx-auto
            flex
            h-20
            w-20
            items-center
            justify-center

            rounded-2xl

            bg-black

            text-3xl
            font-bold
            text-white
            "
          >
            P
          </div>

          <h1
            className="
            mt-6
            text-4xl
            font-bold
            text-gray-900
            "
          >

            {user
              ? "Welcome Back"
              : isLogin
              ? "Login"
              : "Create Account"}

          </h1>

          <p
            className="
            mt-4
            text-gray-500
            "
          >

            {user
              ? user.email
              : "Access premium engineering project solutions."}

          </p>

        </div>

        {!user ? (

          <div
            className="
            mt-10
            space-y-5
            "
          >

            {!isLogin && (

              <input
                type="text"

                placeholder="Full Name"

                value={name}

                onChange={(e) =>
                  setName(e.target.value)
                }

                className="
                w-full

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

            )}

            <input
              type="email"

              placeholder="Email Address"

              value={email}

              onChange={(e) =>
                setEmail(e.target.value)
              }

              className="
              w-full

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

              placeholder="Password"

              value={password}

              onChange={(e) =>
                setPassword(e.target.value)
              }

              className="
              w-full

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

            <Button
              onClick={handleAuth}

              className="
              w-full

              rounded-xl

              bg-black

              py-6
              text-lg
              text-white

              hover:bg-gray-800
              "
            >

              {loading
                ? "Please wait..."
                : isLogin
                ? "Login"
                : "Create Account"}

            </Button>

            <button
              onClick={() =>
                setIsLogin(!isLogin)
              }

              className="
              w-full

              text-sm
              font-medium

              text-gray-600

              transition

              hover:text-black
              "
            >

              {isLogin
                ? "Create new account"
                : "Already have an account?"}

            </button>

          </div>

        ) : (

          <div className="mt-10">

            <Button
              onClick={handleLogout}

              className="
              w-full

              rounded-xl

              bg-red-500

              py-6
              text-lg
              text-white

              hover:bg-red-600
              "
            >
              Logout
            </Button>

          </div>

        )}

      </div>

    </main>

  )
}