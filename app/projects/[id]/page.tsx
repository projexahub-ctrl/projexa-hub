"use client"

import {
  useEffect,
  useState,
} from "react"

import { useParams } from "next/navigation"

import {
  doc,
  getDoc,
} from "firebase/firestore"

import { db } from "../../lib/firebase"

export default function ProjectDetailsPage() {

  const params = useParams()

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

  if (!project) {

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
        Project Not Found
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
        max-w-6xl
        "
      >

        <div
          className="
          glass

          overflow-hidden

          rounded-[40px]
          "
        >

          <img
            src={project.image}

            alt={project.title}

            className="
            h-[450px]
            w-full

            object-cover
            "
          />

          <div className="p-10">

            <div
              className="
              inline-flex

              rounded-full

              bg-blue-500/10

              px-4 py-2

              text-blue-400
              "
            >
              {project.category}
            </div>

            <h1
              className="
              mt-6

              text-6xl
              font-black
              "
            >
              {project.title}
            </h1>

            <p
              className="
              mt-8

              text-xl
              leading-relaxed

              text-slate-400
              "
            >
              {project.description}
            </p>

            <div className="mt-10">

              <p className="text-slate-400">
                Estimated Budget
              </p>

              <h2
                className="
                mt-2

                text-5xl
                font-black

                gradient-text
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