import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function CustomAISection() {
  return (
    <section
      id="custom-ai"
      className="relative py-32"
    >

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6">

        <div className="glass rounded-[40px] p-12 text-center">

          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
            AI POWERED PROJECT GENERATOR
          </div>

          <h2 className="text-5xl font-black leading-tight">
            Need a{" "}
            <span className="gradient-text">
              Custom Project?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Describe your idea and let AI generate the perfect engineering project solution instantly.
          </p>

          <div className="mt-10">

            <Link href="/custom-project">

              <Button
                size="lg"
                className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6 text-lg"
              >
                Generate Custom Project
              </Button>

            </Link>

          </div>

        </div>

      </div>

    </section>
  )
}