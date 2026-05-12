"use client"

import { useState } from "react"

import {
  Sparkles,
  Cpu,
  Bot,
  IndianRupee,
  CheckCircle2,
} from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AIGeneratorPage() {

  const [loading, setLoading] =
    useState(false)

  const [description, setDescription] =
    useState("")

  const [department, setDepartment] =
    useState("Mechanical Engineering")

  const [budget, setBudget] =
    useState("")

  const [generatedProject,
    setGeneratedProject] =
    useState<any>(null)

  // GENERATE PROJECT

  async function handleGenerateProject() {

    try {

      setLoading(true)

      setGeneratedProject(null)

      const response =
        await fetch(

          "/api/generate-project",

          {

            method: "POST",

            headers: {

              "Content-Type":
                "application/json",

            },

            body: JSON.stringify({

              prompt:
                description,

              department,

              budget,

            }),

          }
        )

      const data =
        await response.json()

      console.log(
        "FRONTEND RESPONSE:"
      )

      console.log(data)

      // DISPLAY PROJECT

      if (data.project) {

        setGeneratedProject(
          data.project
        )

      }

      else {

        alert(

          data.message ||

          "Failed to generate project"

        )

      }

    } catch (error) {

      console.log(
        "FRONTEND ERROR:"
      )

      console.log(error)

      alert(
        "Something went wrong"
      )

    } finally {

      setLoading(false)

    }

  }

  return (

    <main
      className="
      min-h-screen
      bg-gray-50
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
            rounded-3xl
            bg-black
            "
          >

            <Sparkles
              className="
              h-10
              w-10
              text-white
              "
            />

          </div>

          <h1
            className="
            mt-8
            text-5xl
            font-bold
            text-gray-900
            md:text-7xl
            "
          >
            AI Project Generator
          </h1>

          <p
            className="
            mx-auto
            mt-6
            max-w-3xl
            text-lg
            leading-8
            text-gray-600
            "
          >
            Generate innovative engineering project ideas instantly
            using artificial intelligence and smart recommendations.
          </p>

        </div>

        {/* FORM */}

        <div
          className="
          mt-16
          rounded-3xl
          border
          border-gray-200
          bg-white
          p-10
          shadow-sm
          "
        >

          <div
            className="
            grid
            gap-6
            md:grid-cols-2
            "
          >

            <input
              value={description}

              onChange={(e) =>
                setDescription(
                  e.target.value
                )
              }

              placeholder="Enter your project idea or requirements..."

              className="
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

            <select
              value={department}

              onChange={(e) =>
                setDepartment(
                  e.target.value
                )
              }

              className="
              rounded-xl
              border
              border-gray-300
              bg-white
              p-4
              text-black
              outline-none
              focus:border-black
              "
            >

              <option>
                Mechanical Engineering
              </option>

              <option>
                AI / ML
              </option>

              <option>
                Robotics
              </option>

              <option>
                IoT
              </option>

              <option>
                ECE
              </option>

              <option>
                EEE
              </option>

              <option>
                Civil Engineering
              </option>

            </select>

            <input
              value={budget}

              onChange={(e) =>
                setBudget(
                  e.target.value
                )
              }

              placeholder="Budget Range"

              className="
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

          </div>

          <Button
            onClick={
              handleGenerateProject
            }

            className="
            mt-8
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
              ? "Generating AI Project..."
              : "Generate Project"}

          </Button>

        </div>

        {/* LOADING */}

        {loading && (

          <div
            className="
            mt-10
            rounded-3xl
            border
            border-gray-200
            bg-white
            p-10
            text-center
            shadow-sm
            "
          >

            <div
              className="
              mx-auto
              h-16
              w-16
              animate-spin
              rounded-full
              border-4
              border-black
              border-t-transparent
              "
            />

            <h2
              className="
              mt-8
              text-3xl
              font-bold
              text-black
              "
            >
              AI is generating project idea...
            </h2>

            <p
              className="
              mt-4
              text-gray-500
              "
            >
              Analyzing engineering trends and innovations.
            </p>

          </div>

        )}

        {/* GENERATED RESULT */}

        {generatedProject && !loading && (

          <div
            className="
            mt-12
            rounded-3xl
            border
            border-gray-200
            bg-white
            p-10
            shadow-sm
            "
          >

            {/* TOP */}

            <div
              className="
              flex
              items-center
              gap-4
              "
            >

              <div
                className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-black
                "
              >

                <Bot
                  className="
                  h-8
                  w-8
                  text-white
                  "
                />

              </div>

              <div>

                <p
                  className="
                  text-gray-500
                  "
                >
                  AI Generated Idea
                </p>

                <h2
                  className="
                  mt-1
                  text-4xl
                  font-bold
                  text-black
                  "
                >
                  {generatedProject.title}
                </h2>

              </div>

            </div>

            {/* DESCRIPTION */}

            <p
              className="
              mt-8
              text-lg
              leading-8
              text-gray-600
              "
            >
              {generatedProject.description}
            </p>

            {/* INFO */}

            <div
              className="
              mt-10
              grid
              gap-6
              md:grid-cols-2
              "
            >

              {/* TECH */}

              <div
                className="
                rounded-2xl
                border
                border-gray-200
                bg-gray-50
                p-6
                "
              >

                <div
                  className="
                  flex
                  items-center
                  gap-4
                  "
                >

                  <Cpu
                    className="
                    h-8
                    w-8
                    text-black
                    "
                  />

                  <div>

                    <p
                      className="
                      text-gray-500
                      "
                    >
                      Technologies
                    </p>

                    <h3
                      className="
                      mt-2
                      text-xl
                      font-semibold
                      text-black
                      "
                    >
                      {generatedProject.technologies}
                    </h3>

                  </div>

                </div>

              </div>

              {/* BUDGET */}

              <div
                className="
                rounded-2xl
                border
                border-gray-200
                bg-gray-50
                p-6
                "
              >

                <div
                  className="
                  flex
                  items-center
                  gap-4
                  "
                >

                  <IndianRupee
                    className="
                    h-8
                    w-8
                    text-black
                    "
                  />

                  <div>

                    <p
                      className="
                      text-gray-500
                      "
                    >
                      Estimated Budget
                    </p>

                    <h3
                      className="
                      mt-2
                      text-xl
                      font-semibold
                      text-black
                      "
                    >
                      {generatedProject.budget}
                    </h3>

                  </div>

                </div>

              </div>

            </div>

            {/* FEATURES */}

            <div
              className="
              mt-10
              rounded-2xl
              border
              border-gray-200
              bg-gray-50
              p-8
              "
            >

              <h3
                className="
                text-2xl
                font-bold
                text-black
                "
              >
                Key Features
              </h3>

              <div
                className="
                mt-6
                grid
                gap-4
                md:grid-cols-2
                "
              >

                {generatedProject.features?.map(
                  (
                    item: string,
                    index: number
                  ) => (

                    <div
                      key={index}

                      className="
                      flex
                      items-center
                      gap-3
                      "
                    >

                      <CheckCircle2
                        className="
                        h-5
                        w-5
                        text-green-600
                        "
                      />

                      <span
                        className="
                        text-gray-700
                        "
                      >
                        {item}
                      </span>

                    </div>

                  )
                )}

              </div>

            </div>

            {/* COMPONENTS */}

            <div
              className="
              mt-10
              rounded-2xl
              border
              border-gray-200
              bg-gray-50
              p-8
              "
            >

              <h3
                className="
                text-2xl
                font-bold
                text-black
                "
              >
                Required Components
              </h3>

              <div
                className="
                mt-6
                grid
                gap-4
                md:grid-cols-2
                "
              >

                {generatedProject.components?.map(
                  (
                    item: string,
                    index: number
                  ) => (

                    <div
                      key={index}

                      className="
                      flex
                      items-center
                      gap-3
                      "
                    >

                      <CheckCircle2
                        className="
                        h-5
                        w-5
                        text-blue-600
                        "
                      />

                      <span
                        className="
                        text-gray-700
                        "
                      >
                        {item}
                      </span>

                    </div>

                  )
                )}

              </div>

            </div>

          </div>

        )}

      </div>

    </main>

  )

}