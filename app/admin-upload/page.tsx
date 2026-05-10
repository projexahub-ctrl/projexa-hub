"use client"

import {
  useEffect,
  useState,
} from "react"

import { useRouter }
from "next/navigation"

import {
  onAuthStateChanged,
} from "firebase/auth"

import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore"

import {
  auth,
  db,
} from "./../lib/firebase"

export default function AdminUploadPage() {

  const router = useRouter()

  const [loading, setLoading] =
    useState(true)

  const [uploading, setUploading] =
    useState(false)

  const [title, setTitle] =
    useState("")

  const [category, setCategory] =
    useState("")

  const [budget, setBudget] =
    useState("")

  const [image, setImage] =
    useState("")

  const [description,
    setDescription] =
    useState("")

  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(
        auth,
        (user) => {

          if (!user) {

            router.push("/auth")

          }

          setLoading(false)

        }
      )

    return () => unsubscribe()

  }, [router])

  async function uploadProject() {

    if (
      !title ||
      !category ||
      !budget ||
      !image ||
      !description
    ) {

      alert("Fill all fields")

      return

    }

    try {

      setUploading(true)

      await addDoc(
        collection(db, "projects"),
        {
          title,
          category,
          budget,
          image,
          description,
          createdAt:
            serverTimestamp(),
        }
      )

      alert("Project Uploaded 🚀")

      setTitle("")
      setCategory("")
      setBudget("")
      setImage("")
      setDescription("")

      router.push("/projects")

    } catch (error) {

      console.log(error)

      alert("Upload Failed")

    } finally {

      setUploading(false)

    }

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
        Checking Access...
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
        max-w-4xl
        "
      >

        <div className="text-center">

          <h1
            className="
            text-5xl
            font-black

            md:text-7xl
            "
          >

            Upload{" "}

            <span className="gradient-text">
              Project
            </span>

          </h1>

          <p
            className="
            mt-6

            text-lg
            text-slate-400
            "
          >
            Add engineering projects
            to ProjexaHub
          </p>

        </div>

        <div
          className="
          glass

          mt-16

          rounded-[40px]

          p-10
          "
        >

          <div
            className="
            grid gap-6
            "
          >

            <input
              value={title}

              onChange={(e) =>
                setTitle(e.target.value)
              }

              placeholder="Project Title"

              className="
              rounded-2xl

              border border-white/10

              bg-white/5

              p-5

              text-white

              outline-none
              "
            />

            <input
              value={category}

              onChange={(e) =>
                setCategory(e.target.value)
              }

              placeholder="Category"

              className="
              rounded-2xl

              border border-white/10

              bg-white/5

              p-5

              text-white

              outline-none
              "
            />

            <input
              value={budget}

              onChange={(e) =>
                setBudget(e.target.value)
              }

              placeholder="Budget"

              className="
              rounded-2xl

              border border-white/10

              bg-white/5

              p-5

              text-white

              outline-none
              "
            />

            <input
              value={image}

              onChange={(e) =>
                setImage(e.target.value)
              }

              placeholder="Image URL"

              className="
              rounded-2xl

              border border-white/10

              bg-white/5

              p-5

              text-white

              outline-none
              "
            />

            <textarea
              rows={8}

              value={description}

              onChange={(e) =>
                setDescription(
                  e.target.value
                )
              }

              placeholder="Project Description"

              className="
              rounded-2xl

              border border-white/10

              bg-white/5

              p-5

              text-white

              outline-none
              "
            />

            <button
              onClick={uploadProject}

              className="
              rounded-2xl

              bg-gradient-to-r
              from-blue-600
              to-purple-600

              py-6

              text-lg
              font-bold

              transition-all

              hover:scale-[1.02]
              "
            >

              {uploading
                ? "Uploading..."
                : "Upload Project"}

            </button>

          </div>

        </div>

      </div>

    </main>
  )
}