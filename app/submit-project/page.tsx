"use client"

import { useState } from "react"

import {
  Upload,
  CheckCircle2,
} from "lucide-react"

import { Button } from "@/components/ui/button"

export default function SubmitProjectPage() {

  const [submitted, setSubmitted] =
    useState(false)

  function handleSubmit() {

    setSubmitted(true)

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
        max-w-5xl
        "
      >

        {!submitted ? (

          <>

            {/* HEADER */}

            <div className="text-center">

              <div
                className="
                inline-flex
                rounded-full
                bg-blue-100
                px-4
                py-2
                text-sm
                font-medium
                text-blue-700
                "
              >
                SUBMIT PROJECT
              </div>

              <h1
                className="
                mt-6
                text-5xl
                font-bold
                leading-tight
                text-gray-900

                md:text-6xl
                "
              >
                Submit Your
                <br />
                Project Idea
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
                Tell ProjexaHub about your engineering project
                requirements and our team will contact you
                with the best possible solution.
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
                  placeholder="Full Name"

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

                <input
                  placeholder="College Name"

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

                <input
                  placeholder="Phone Number"

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
                    Select Department
                  </option>

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
                    Embedded Systems
                  </option>

                </select>

                <input
                  placeholder="Expected Budget"

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

                <input
                  placeholder="Project Deadline"

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

              <textarea
                rows={8}

                placeholder="Describe your project idea in detail..."

                className="
                mt-6
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

              {/* FILE UPLOAD */}

              <div
                className="
                mt-6

                rounded-3xl
                border
                border-dashed
                border-gray-300

                bg-gray-50

                p-10
                text-center
                "
              >

                <div
                  className="
                  mx-auto
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center

                  rounded-2xl

                  bg-black
                  "
                >

                  <Upload
                    className="
                    h-8
                    w-8
                    text-white
                    "
                  />

                </div>

                <p
                  className="
                  mt-6
                  text-lg
                  font-medium
                  text-gray-900
                  "
                >
                  Upload Project Files
                </p>

                <p
                  className="
                  mt-2
                  text-sm
                  text-gray-500
                  "
                >
                  PDF, DOCX, PPT, ZIP (Coming Soon)
                </p>

              </div>

              {/* BUTTON */}

              <Button
                onClick={handleSubmit}

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
                Submit Project
              </Button>

            </div>

          </>

        ) : (

          <div
            className="
            mx-auto
            max-w-3xl

            rounded-3xl
            border
            border-gray-200

            bg-white

            p-16
            text-center

            shadow-sm
            "
          >

            <div
              className="
              mx-auto
              flex
              h-24
              w-24
              items-center
              justify-center

              rounded-full

              bg-green-100
              "
            >

              <CheckCircle2
                className="
                h-14
                w-14
                text-green-600
                "
              />

            </div>

            <h2
              className="
              mt-8
              text-5xl
              font-bold
              text-gray-900
              "
            >
              Project Submitted
            </h2>

            <p
              className="
              mt-6
              text-lg
              leading-8
              text-gray-600
              "
            >
              Thank you for submitting your project idea.

              <br />

              Our ProjexaHub team will contact you soon.
            </p>

            <Button
              onClick={() => setSubmitted(false)}

              className="
              mt-10

              rounded-xl

              bg-black

              px-8
              py-6
              text-lg
              text-white

              hover:bg-gray-800
              "
            >
              Submit Another Project
            </Button>

          </div>

        )}

      </div>

    </main>

  )
}