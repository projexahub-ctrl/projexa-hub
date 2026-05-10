"use client"

import {
  useEffect,
  useState,
} from "react"

import Link from "next/link"

import {
  collection,
  getDocs,
} from "firebase/firestore"

import { db } from "../lib/firebase"

export default function ProjectsPage() {

  const [projects, setProjects] =
    useState<any[]>([])

  const [filteredProjects,
    setFilteredProjects] =
    useState<any[]>([])

  const [search, setSearch] =
    useState("")

  const [loading, setLoading] =
    useState(true)

  useEffect(() => {

    async function fetchProjects() {

      try {

        const querySnapshot =
          await getDocs(
            collection(db, "projects")
          )

        const data: any[] = []

        querySnapshot.forEach((doc) => {

          data.push({
            id: doc.id,
            ...doc.data(),
          })

        })

        setProjects(data)

        setFilteredProjects(data)

      } catch (error) {

        console.log(error)

      } finally {

        setLoading(false)

      }

    }

    fetchProjects()

  }, [])

  useEffect(() => {

    const filtered =
      projects.filter((project) =>

        project.title
          .toLowerCase()
          .includes(search.toLowerCase())

      )

    setFilteredProjects(filtered)

  }, [search, projects])

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

        <div className="text-center">

          <h1
            className="
            text-5xl
            font-black

            md:text-7xl
            "
          >

            Explore{" "}

            <span className="gradient-text">
              Projects
            </span>

          </h1>

        </div>

        <div className="mt-12">

          <input
            value={search}

            onChange={(e) =>
              setSearch(e.target.value)
            }

            placeholder="Search Projects..."

            className="
            w-full

            rounded-2xl

            border border-white/10

            bg-white/5

            p-5

            text-white

            outline-none
            "
          />

        </div>

        {loading ? (

          <div className="mt-20 text-center">
            Loading Projects...
          </div>

        ) : (

          <div
            className="
            mt-20

            grid gap-8

            md:grid-cols-2
            lg:grid-cols-3
            "
          >

            {filteredProjects.map((project) => (

              <div
                key={project.id}

                className="
                glass

                overflow-hidden

                rounded-[32px]

                border border-white/10

                transition-all
                duration-300

                hover:-translate-y-2
                hover:shadow-[0_0_40px_rgba(99,102,241,0.35)]
                "
              >

                <div className="relative">

                  <img
                    src={project.image}

                    alt={project.title}

                    className="
                    h-60
                    w-full

                    object-cover
                    "
                  />

                  <div
                    className="
                    absolute
                    inset-0

                    bg-gradient-to-t
                    from-[#060816]
                    via-transparent
                    to-transparent
                    "
                  />

                  <div
                    className="
                    absolute
                    left-6
                    top-6
                    "
                  >

                    <div
                      className="
                      inline-flex

                      rounded-full

                      bg-blue-500/20

                      backdrop-blur-md

                      px-4 py-2

                      text-sm
                      text-blue-300
                      "
                    >
                      {project.category}
                    </div>

                  </div>

                </div>

                <div className="p-8">

                  <h2
                    className="
                    text-4xl
                    font-black
                    "
                  >
                    {project.title}
                  </h2>

                  <p
                    className="
                    mt-4

                    line-clamp-3

                    text-slate-400
                    "
                  >
                    {project.description}
                  </p>

                  <div
                    className="
                    mt-8

                    flex
                    items-center
                    justify-between
                    "
                  >

                    <div>

                      <p className="text-slate-500">
                        Budget
                      </p>

                      <h3
                        className="
                        text-3xl
                        font-black

                        gradient-text
                        "
                      >
                        ₹{project.budget}
                      </h3>

                    </div>

                    <Link
                      href={`/projects/${project.id}`}
                    >

                      <button
                        className="
                        rounded-2xl

                        bg-gradient-to-r
                        from-blue-600
                        to-purple-600

                        px-6 py-4

                        font-bold

                        transition-all

                        hover:scale-105
                        "
                      >
                        View Project
                      </button>

                    </Link>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </main>
  )
}