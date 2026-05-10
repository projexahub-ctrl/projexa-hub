"use client"

import { motion } from "framer-motion"

const stats = [
  {
    number: "500+",
    label: "Projects Completed",
  },
  {
    number: "120+",
    label: "Colleges Connected",
  },
  {
    number: "24/7",
    label: "Technical Support",
  },
  {
    number: "98%",
    label: "Client Satisfaction",
  },
]

export default function StatsSection() {
  return (
    <section className="relative py-32">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat, index) => (

            <motion.div
              key={index}

              initial={{
                opacity: 0,
                y: 50,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}

              viewport={{
                once: true,
              }}

              className="
              glass
              rounded-3xl
              p-10
              text-center
              hover:-translate-y-2
              transition
              "
            >

              <h2 className="
              gradient-text
              text-5xl
              font-black
              ">
                {stat.number}
              </h2>

              <p className="mt-4 text-slate-400">
                {stat.label}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}