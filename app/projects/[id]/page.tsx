"use client"

import {
  useEffect,
  useState,
} from "react"

import Image from "next/image"

import {
  useParams,
} from "next/navigation"

import {
  doc,
  getDoc,
} from "firebase/firestore"

import { db }
from "@/app/lib/firebase"

export default function ProjectDetailsPage() {

  const params =
    useParams()

  const [project, setProject] =
    useState<any>(null)

  const [loading, setLoading] =
    useState(true)

  useEffect(() => {

    async function fetchProject() {

      try {

        const docRef =
          doc(
            db,
            "projects",
            params.id as string
          )

        const docSnap =
          await getDoc(docRef)

        if (docSnap.exists()) {

          setProject({
            id: docSnap.id,
            ...docSnap.data(),
          })

        }

      } catch (error) {

        console.log(error)

      } finally {

        setLoading(false)

      }

    }

    if (params?.id) {

      fetchProject()

    }

  }, [params])

  if (loading) {

    return (

      <main
        className="
        flex
        min-h-screen
        items-center
        justify-center

        bg-[#f8fafc]

        text-2xl
        font-semibold
        text-black
        "
      >
        Loading...
      </main>

    )

  }

  if (!project) {

    return (

      <main
        className="
        flex
        min-h-screen
        items-center
        justify-center

        bg-[#f8fafc]

        text-2xl
        font-semibold
        text-black
        "
      >
        Project Not Found
      </main>

    )

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
        max-w-6xl
        "
      >

        <div
          className="
          overflow-hidden
          rounded-[40px]

          border
          border-gray-200

          bg-white

          shadow-sm
          "
        >

          <div
            className="
            relative
            h-[500px]
            w-full
            "
          >

            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />

          </div>

          <div className="p-10">

            <div
              className="
              inline-flex
              rounded-full

              bg-blue-100

              px-5
              py-2

              text-sm
              font-semibold

              text-blue-600
              "
            >
              {project.category}
            </div>

            <h1
              className="
              mt-6
              text-6xl
              font-black
              text-black
              "
            >
              {project.title}
            </h1>

            <p
              className="
              mt-8
              text-xl
              leading-relaxed
              text-gray-600
              "
            >
              {project.description}
            </p>

            <div className="mt-12">

              <p
                className="
                text-lg
                text-gray-500
                "
              >
                Estimated Budget
              </p>

              <h2
                className="
                mt-3
                text-5xl
                font-black
                text-black
                "
              >
                ₹{project.budget}
              </h2>

            </div>

          </div>

        </div>

      </div>

    </main>

  )

}