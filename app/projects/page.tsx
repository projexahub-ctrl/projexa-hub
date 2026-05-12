"use client"

import Link from "next/link"

import {
  useEffect,
  useState,
} from "react"

import Image from "next/image"

import {
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore"

import {
  onAuthStateChanged,
} from "firebase/auth"

import {
  auth,
  db,
} from "@/app/lib/firebase"

export default function ProjectsPage() {

  const ADMIN_EMAIL =
    "dasaripurushottam58@gmail.com"

  const [isAdmin, setIsAdmin] =
    useState(false)

  const [projects, setProjects] =
    useState<any[]>([])

  const [loading, setLoading] =
    useState(true)

  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(
        auth,
        (user) => {

          if (
            user?.email ===
            ADMIN_EMAIL
          ) {

            setIsAdmin(true)

          }

        }
      )

    return () => unsubscribe()

  }, [])

  async function handleDelete(
    id: string
  ) {

    const confirmDelete =
      confirm(
        "Delete this project?"
      )

    if (!confirmDelete) return

    try {

      await deleteDoc(
        doc(db, "projects", id)
      )

      setProjects(
        projects.filter(
          (project) =>
            project.id !== id
        )
      )

    } catch (error) {

      console.log(error)

      alert("Failed to delete")

    }

  }

  useEffect(() => {

    async function fetchProjects() {

      try {

        const querySnapshot =
          await getDocs(
            collection(db, "projects")
          )

        const projectsData =
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))

        setProjects(projectsData)

      } catch (error) {

        console.log(error)

      } finally {

        setLoading(false)

      }

    }

    fetchProjects()

  }, [])

  if (loading) {

    return (

      <main
        className="
        flex
        min-h-screen
        items-center
        justify-center
        bg-[#f8fafc]
        text-black
        "
      >
        Loading Projects...
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
        max-w-7xl
        "
      >

        <div className="text-center">

          <h1
            className="
            text-6xl
            font-black
            text-black
            "
          >
            Explore Projects
          </h1>

        </div>

        <div
          className="
          mt-20
          grid
          gap-10
          md:grid-cols-2
          "
        >

          {projects.map((project) => (

            <div
              key={project.id}

              className="
              overflow-hidden
              rounded-3xl
              border
              border-gray-200
              bg-white
              shadow-sm
              "
            >

              <div className="relative h-72 w-full">

                <Image
                  src={
                    project.image
                  }

                  alt={
                    project.title
                  }

                  fill

                  className="object-cover"
                />

              </div>

              <div className="p-8">

                <div
                  className="
                  inline-flex
                  rounded-full
                  bg-gray-100
                  px-4
                  py-2
                  text-sm
                  text-gray-700
                  "
                >
                  {project.category}
                </div>

                <h2
                  className="
                  mt-6
                  text-4xl
                  font-black
                  text-black
                  "
                >
                  {project.title}
                </h2>

                <p
                  className="
                  mt-5
                  text-gray-600
                  leading-8
                  "
                >
                  {project.description}
                </p>

                <div
                  className="
                  mt-10
                  flex
                  items-center
                  justify-between
                  "
                >

                  <h3
                    className="
                    text-4xl
                    font-black
                    text-black
                    "
                  >
                    ₹{project.budget}
                  </h3>

                  <div className="flex gap-4">

                    <Link
                      href={`/projects/${project.id}`}
                    >

                      <button
                        className="
                        rounded-2xl
                        bg-black
                        px-6
                        py-4
                        text-white
                        "
                      >
                        View Details
                      </button>

                    </Link>

                    {isAdmin && (

                      <button
                        onClick={() =>
                          handleDelete(
                            project.id
                          )
                        }

                        className="
                        rounded-2xl
                        bg-red-500
                        px-6
                        py-4
                        text-white
                        "
                      >
                        Delete
                      </button>

                    )}

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>

  )

}