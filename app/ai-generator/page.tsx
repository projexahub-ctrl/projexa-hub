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

  const [loading, setLoading] = useState(false)

  const [generated, setGenerated] = useState(false)

  function generateProject() {

    setLoading(true)

    setGenerated(false)

    setTimeout(() => {

      setLoading(false)

      setGenerated(true)

    }, 2500)

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

            bg-gradient-to-r
            from-blue-600
            to-purple-600
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
            font-black

            md:text-7xl
            "
          >

            AI Project{" "}

            <span className="gradient-text">
              Generator
            </span>

          </h1>

          <p
            className="
            mt-6
            text-lg
            text-slate-400
            "
          >
            Generate innovative engineering project ideas instantly using AI.
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
              placeholder="Enter project domain..."

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

            </select>

            <input
              placeholder="Budget Range"

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

          <Button
            onClick={generateProject}

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

            {loading
              ? "Generating AI Project..."
              : "Generate Project"}

          </Button>

        </div>

        {loading && (

          <div
            className="
            glass
            mt-10
            rounded-[40px]
            p-10
            text-center
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
              border-blue-500
              border-t-transparent
              "
            />

            <h2
              className="
              mt-8
              text-3xl
              font-black
              "
            >
              AI is generating project idea...
            </h2>

            <p
              className="
              mt-4
              text-slate-400
              "
            >
              Analyzing engineering trends and innovations.
            </p>

          </div>

        )}

        {generated && (

          <div
            className="
            glass
            mt-12
            rounded-[40px]
            p-10
            "
          >

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

                bg-gradient-to-r
                from-blue-600
                to-purple-600
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
                  text-slate-400
                  "
                >
                  AI Generated Idea
                </p>

                <h2
                  className="
                  mt-1
                  text-4xl
                  font-black
                  "
                >
                  AI Smart Waste Management System
                </h2>

              </div>

            </div>

            <p
              className="
              mt-8
              text-lg
              leading-relaxed
              text-slate-400
              "
            >
              Intelligent waste management system using IoT sensors and AI analytics to optimize garbage collection and improve smart city infrastructure.
            </p>

            <div
              className="
              mt-10
              grid gap-6

              md:grid-cols-2
              "
            >

              <div
                className="
                rounded-3xl
                bg-white/[0.04]
                p-6
                "
              >

                <div
                  className="
                  flex items-center gap-4
                  "
                >

                  <Cpu
                    className="
                    h-8
                    w-8
                    text-blue-400
                    "
                  />

                  <div>

                    <p
                      className="
                      text-slate-400
                      "
                    >
                      Technologies
                    </p>

                    <h3
                      className="
                      mt-2
                      text-xl
                      font-bold
                      "
                    >
                      IoT + AI + Cloud
                    </h3>

                  </div>

                </div>

              </div>

              <div
                className="
                rounded-3xl
                bg-white/[0.04]
                p-6
                "
              >

                <div
                  className="
                  flex items-center gap-4
                  "
                >

                  <IndianRupee
                    className="
                    h-8
                    w-8
                    text-green-400
                    "
                  />

                  <div>

                    <p
                      className="
                      text-slate-400
                      "
                    >
                      Estimated Budget
                    </p>

                    <h3
                      className="
                      mt-2
                      text-xl
                      font-bold
                      "
                    >
                      ₹12,000 - ₹18,000
                    </h3>

                  </div>

                </div>

              </div>

            </div>

            <div
              className="
              mt-10
              rounded-3xl
              bg-white/[0.04]
              p-8
              "
            >

              <h3
                className="
                text-2xl
                font-black
                "
              >
                Components Required
              </h3>

              <div
                className="
                mt-6
                grid gap-4

                md:grid-cols-2
                "
              >

                {[
                  "ESP32",
                  "Ultrasonic Sensors",
                  "GSM Module",
                  "GPS Module",
                  "Cloud Dashboard",
                  "Battery Pack",
                ].map((item, index) => (

                  <div
                    key={index}

                    className="
                    flex items-center gap-3
                    "
                  >

                    <CheckCircle2
                      className="
                      h-5
                      w-5
                      text-green-400
                      "
                    />

                    <span
                      className="
                      text-slate-300
                      "
                    >
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        )}

      </div>

    </main>
  )
}