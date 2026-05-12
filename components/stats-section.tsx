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

    <section
      className="
      bg-white
      py-24
      "
    >

      <div
        className="
        mx-auto
        max-w-7xl
        px-6
        "
      >

        <div
          className="
          grid
          gap-8

          md:grid-cols-2
          lg:grid-cols-4
          "
        >

          {stats.map((stat, index) => (

            <motion.div
              key={index}

              initial={{
                opacity: 0,
                y: 30,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}

              viewport={{
                once: true,
              }}

              className="
              rounded-3xl
              border
              border-gray-200
              bg-gray-50
              p-10
              text-center

              transition-all
              duration-300

              hover:-translate-y-1
              hover:shadow-xl
              "
            >

              <h2
                className="
                text-5xl
                font-extrabold
                tracking-tight
                text-black
                "
              >
                {stat.number}
              </h2>

              <p
                className="
                mt-4
                text-lg
                text-gray-600
                "
              >
                {stat.label}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  )
}