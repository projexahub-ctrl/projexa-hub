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

  const [isLogin, setIsLogin] = useState(true)

  const [email, setEmail] = useState("")

  const [password, setPassword] = useState("")

  const [name, setName] = useState("")

  const [loading, setLoading] = useState(false)

  const [user, setUser] = useState<any>(null)

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
      min-h-screen
      bg-[#060816]

      flex
      items-center
      justify-center

      px-6
      "
    >

      <div
        className="
        glass
        w-full
        max-w-md

        rounded-[40px]
        p-10
        "
      >

        <div className="text-center">

          <h1
            className="
            text-5xl
            font-black
            "
          >

            {user
              ? "Welcome 🚀"
              : isLogin
              ? "Login"
              : "Create Account"}

          </h1>

          <p
            className="
            mt-4
            text-slate-400
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
            space-y-6
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

                rounded-2xl
                border border-white/10

                bg-white/[0.05]

                p-5
                text-white

                outline-none
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

              rounded-2xl
              border border-white/10

              bg-white/[0.05]

              p-5
              text-white

              outline-none
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

              rounded-2xl
              border border-white/10

              bg-white/[0.05]

              p-5
              text-white

              outline-none
              "
            />

            <Button
              onClick={handleAuth}

              className="
              w-full

              rounded-2xl

              bg-gradient-to-r
              from-blue-600
              to-purple-600

              py-6
              text-lg
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
              text-blue-400
              hover:text-blue-300
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

              rounded-2xl

              bg-red-500
              hover:bg-red-600

              py-6
              text-lg
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