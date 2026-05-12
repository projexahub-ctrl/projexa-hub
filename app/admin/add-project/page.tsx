"use client"

import {
  useEffect,
  useState,
} from "react"

import {
  addDoc,
  collection,
} from "firebase/firestore"

import {
  onAuthStateChanged,
} from "firebase/auth"

import {
  useRouter,
} from "next/navigation"

import {
  auth,
  db,
} from "@/app/lib/firebase"

export default function AddProjectPage() {

  const router =
    useRouter()

  const ADMIN_EMAIL =
    "dasaripurushottam58@gmail.com"

  const [authorized, setAuthorized] =
    useState(false)

  const [title, setTitle] =
    useState("")

  const [category, setCategory] =
    useState("")

  const [budget, setBudget] =
    useState("")

  const [image, setImage] =
    useState("")

  const [description, setDescription] =
    useState("")

  const [loading, setLoading] =
    useState(false)

  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(
        auth,
        (user) => {

          if (
            user &&
            user.email ===
              ADMIN_EMAIL
          ) {

            setAuthorized(true)

          } else {

            router.push("/")

          }

        }
      )

    return () => unsubscribe()

  }, [])

  async function handleAddProject() {

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

      setLoading(true)

      await addDoc(
        collection(db, "projects"),
        {
          title,
          category,
          budget,
          image,
          description,
          createdAt: Date.now(),
        }
      )

      alert(
        "Project Added Successfully"
      )

      setTitle("")
      setCategory("")
      setBudget("")
      setImage("")
      setDescription("")

    } catch (error) {

      console.log(error)

      alert("Failed To Add Project")

    } finally {

      setLoading(false)

    }

  }

  if (!authorized) {

    return null

  }

  return (

    <main
      className="
      min-h-screen
      bg-[#f8fafc]
      px-6
      py-32
      "
    >

      <div
        className="
        mx-auto
        max-w-5xl
        "
      >

        <div className="text-center">

          <h1
            className="
            text-5xl
            font-black
            text-black
            "
          >
            Add Project
          </h1>

          <p
            className="
            mt-4
            text-gray-500
            "
          >
            Admin Upload Panel
          </p>

        </div>

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

          <div className="space-y-6">

            <input
              value={title}
              onChange={(e) =>
                setTitle(
                  e.target.value
                )
              }

              placeholder="Project Title"

              className="
              w-full
              rounded-2xl
              border
              border-gray-300
              p-5
              outline-none
              "
            />

            <input
              value={category}
              onChange={(e) =>
                setCategory(
                  e.target.value
                )
              }

              placeholder="Category"

              className="
              w-full
              rounded-2xl
              border
              border-gray-300
              p-5
              outline-none
              "
            />

            <input
              value={budget}
              onChange={(e) =>
                setBudget(
                  e.target.value
                )
              }

              placeholder="Budget"

              className="
              w-full
              rounded-2xl
              border
              border-gray-300
              p-5
              outline-none
              "
            />

            <input
              value={image}
              onChange={(e) =>
                setImage(
                  e.target.value
                )
              }

              placeholder="Cloudinary Image URL"

              className="
              w-full
              rounded-2xl
              border
              border-gray-300
              p-5
              outline-none
              "
            />

            <textarea
              value={description}
              onChange={(e) =>
                setDescription(
                  e.target.value
                )
              }

              rows={6}

              placeholder="Project Description"

              className="
              w-full
              rounded-2xl
              border
              border-gray-300
              p-5
              outline-none
              "
            />

            <button
              onClick={
                handleAddProject
              }

              disabled={loading}

              className="
              w-full
              rounded-2xl
              bg-black
              py-5
              text-lg
              font-semibold
              text-white
              "
            >
              {loading
                ? "Adding..."
                : "Add Project"}
            </button>

          </div>

        </div>

      </div>

    </main>
  )

}