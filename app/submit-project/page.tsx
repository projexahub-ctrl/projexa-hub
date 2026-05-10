"use client"

import { useState } from "react"

import {
  Upload,
  CheckCircle2,
} from "lucide-react"

import { Button } from "@/components/ui/button"

export default function SubmitProjectPage() {

  const [submitted, setSubmitted] = useState(false)

  function handleSubmit() {

    setSubmitted(true)

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
        max-w-5xl
        "
      >

        {!submitted ? (

          <>

            <div className="text-center">

              <h1
                className="
                text-5xl
                font-black

                md:text-7xl
                "
              >

                Submit Your{" "}

                <span className="gradient-text">
                  Project Idea
                </span>

              </h1>

              <p
                className="
                mt-6
                text-lg
                text-slate-400
                "
              >
                Tell ProjexaHub about your project requirements and our team will contact you.
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
                md:grid-cols-2
                "
              >

                <input
                  placeholder="Full Name"

                  className="
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.05]

                  p-5
                  text-white

                  outline-none
                  "
                />

                <input
                  placeholder="College Name"

                  className="
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.05]

                  p-5
                  text-white

                  outline-none
                  "
                />

                <input
                  placeholder="Phone Number"

                  className="
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.05]

                  p-5
                  text-white

                  outline-none
                  "
                />

                <select
                  className="
                  rounded-2xl
                  border border-white/10
                  bg-[#0f172a]

                  p-5
                  text-white

                  outline-none
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
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.05]

                  p-5
                  text-white

                  outline-none
                  "
                />

                <input
                  placeholder="Project Deadline"

                  className="
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.05]

                  p-5
                  text-white

                  outline-none
                  "
                />

              </div>

              <textarea
                rows={8}

                placeholder="Describe your project idea in detail..."

                className="
                mt-6
                w-full

                rounded-2xl
                border border-white/10
                bg-white/[0.05]

                p-5
                text-white

                outline-none
                "
              />

              <div
                className="
                mt-6

                rounded-[32px]
                border border-dashed border-white/10

                bg-white/[0.03]

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
                  bg-white/[0.05]
                  "
                >

                  <Upload
                    className="
                    h-8
                    w-8
                    text-slate-300
                    "
                  />

                </div>

                <p
                  className="
                  mt-6
                  text-lg
                  text-slate-300
                  "
                >
                  Upload Project Files
                </p>

                <p
                  className="
                  mt-2
                  text-sm
                  text-slate-500
                  "
                >
                  PDF, DOCX, PPT, ZIP (Coming Soon)
                </p>

              </div>

              <Button
                onClick={handleSubmit}

                className="
                mt-8
                w-full

                rounded-2xl
                bg-gradient-to-r
                from-blue-600
                to-purple-600

                py-6
                text-lg

                transition
                hover:scale-[1.01]
                "
              >
                Submit Project
              </Button>

            </div>

          </>

        ) : (

          <div
            className="
            glass
            mx-auto
            max-w-3xl

            rounded-[40px]
            p-16
            text-center
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
              bg-green-500/10
              "
            >

              <CheckCircle2
                className="
                h-14
                w-14
                text-green-400
                "
              />

            </div>

            <h2
              className="
              mt-8
              text-5xl
              font-black
              "
            >
              Project Submitted
            </h2>

            <p
              className="
              mt-6
              text-lg
              text-slate-400
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

              rounded-2xl
              bg-gradient-to-r
              from-blue-600
              to-purple-600

              px-8
              py-6
              text-lg
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