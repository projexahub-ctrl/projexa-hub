"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"

export default function CustomProjectPage() {

  const [prompt, setPrompt] = useState("")
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState("")
  const [error, setError] = useState("")

  async function generateProject() {

    if (!prompt) return

    setLoading(true)
    setError("")
    setResponse("")

    try {

      const res = await fetch("/api/generate-project", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      })

      const data = await res.json()

      if (data.success) {
        setResponse(data.result)
      } else {
        setError(data.error)
      }

    } catch (err: any) {

      setError("Something went wrong")

    }

    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-[#020617] px-6 py-32 text-white">

      <div className="mx-auto max-w-5xl">

        <div className="text-center">

          <h1 className="text-5xl font-black md:text-7xl">
            AI Custom{" "}
            <span className="gradient-text">
              Project Generator
            </span>
          </h1>

          <p className="mt-6 text-slate-400 text-lg">
            Describe your engineering idea and generate a complete project instantly.
          </p>

        </div>

        <div className="glass mt-16 rounded-[40px] p-10">

          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={8}
            placeholder="Describe your project idea..."
            className="w-full rounded-3xl border border-white/10 bg-white/5 p-6 text-white outline-none"
          />

          <Button
            onClick={generateProject}
            className="mt-6 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6 text-lg"
          >
            {loading ? "Generating..." : "Generate Project"}
          </Button>

        </div>

        {error && (

          <div className="mt-10 rounded-3xl border border-red-500/20 bg-red-500/10 p-6 text-red-400">
            {error}
          </div>

        )}

        {response && (

          <div className="glass mt-12 rounded-[40px] p-10">

            <h2 className="mb-6 text-3xl font-black">
              Generated Project
            </h2>

            <div className="whitespace-pre-wrap text-slate-300 leading-relaxed">
              {response}
            </div>

          </div>

        )}

      </div>

    </main>
  )
}