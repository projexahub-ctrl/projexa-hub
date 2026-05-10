"use client"

import { useState } from "react"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const projects = [
  {
    title: "Smart Stair Cleaning Robot",
    category: "Robotics",
    budget: "₹18,000",
    description:
      "Autonomous stair cleaning robot with obstacle detection and water spray mechanism.",
  },

  {
    title: "AI Attendance System",
    category: "AI/ML",
    budget: "₹12,000",
    description:
      "Face recognition based attendance management system using AI.",
  },

  {
    title: "IoT Home Automation",
    category: "IoT",
    budget: "₹10,000",
    description:
      "Smart home automation system controlled using mobile application.",
  },
]

export default function FeaturedProjects() {

  const [selectedProject, setSelectedProject] =
    useState<any>(null)

  return (
    <section
      id="projects"
      className="py-32"
    >

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <h2 className="text-5xl font-black">
            Featured{" "}
            <span className="gradient-text">
              Projects
            </span>
          </h2>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {projects.map((project, i) => (

            <div
              key={i}

              onClick={() => setSelectedProject(project)}

              className="
              glass
              cursor-pointer
              rounded-3xl
              overflow-hidden
              transition
              hover:-translate-y-2
              "
            >

              <div className="
              h-56
              bg-gradient-to-r
              from-blue-600/30
              to-purple-600/30
              " />

              <div className="p-8">

                <div className="
                mb-4
                inline-flex
                rounded-full
                bg-blue-500/10
                px-3 py-1
                text-sm
                text-blue-400
                ">
                  {project.category}
                </div>

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 text-slate-400">
                  Premium engineering project with complete implementation support.
                </p>

                <div className="mt-6">

                  <span className="text-xl font-bold text-white">
                    {project.budget}
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >

        <DialogContent
          className="
          border-white/10
          bg-[#020617]
          text-white
          "
        >

          <DialogHeader>

            <DialogTitle className="text-3xl font-black">
              {selectedProject?.title}
            </DialogTitle>

          </DialogHeader>

          <div className="mt-6 space-y-4">

            <div>
              <h3 className="font-bold text-blue-400">
                Category
              </h3>

              <p className="text-slate-300">
                {selectedProject?.category}
              </p>
            </div>

            <div>
              <h3 className="font-bold text-blue-400">
                Budget
              </h3>

              <p className="text-slate-300">
                {selectedProject?.budget}
              </p>
            </div>

            <div>
              <h3 className="font-bold text-blue-400">
                Description
              </h3>

              <p className="text-slate-300">
                {selectedProject?.description}
              </p>
            </div>

          </div>

        </DialogContent>

      </Dialog>

    </section>
  )
}