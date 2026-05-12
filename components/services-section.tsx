import {
  Bot,
  Cpu,
  Wrench,
  Brain,
  Code,
  Zap,
} from "lucide-react"

const services = [

  {
    title: "AI & Machine Learning",
    icon: Brain,

    description:
      "Custom AI, deep learning and intelligent automation systems for modern engineering applications.",
  },

  {
    title: "IoT Solutions",
    icon: Cpu,

    description:
      "Smart sensor-based systems with cloud connectivity and real-time monitoring capabilities.",
  },

  {
    title: "Robotics Engineering",
    icon: Bot,

    description:
      "Autonomous robots, automation systems and innovative robotic solutions.",
  },

  {
    title: "Mechanical Design",
    icon: Wrench,

    description:
      "Advanced fabrication, CAD modeling and mechanical engineering project development.",
  },

  {
    title: "Software Development",
    icon: Code,

    description:
      "Professional websites, mobile applications and custom software systems.",
  },

  {
    title: "Embedded & Electrical",
    icon: Zap,

    description:
      "Microcontroller programming, embedded electronics and automation projects.",
  },

]

export default function ServicesSection() {

  return (

    <section
      id="services"

      className="
      bg-gray-50
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
            OUR SERVICES
          </div>

          <h2
            className="
            mt-6
            text-5xl
            font-bold
            text-gray-900
            "
          >
            Professional Engineering Solutions
          </h2>

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
            Delivering high-quality final year engineering projects,
            innovative technical solutions and complete implementation support.
          </p>

        </div>

        {/* SERVICE GRID */}

        <div
          className="
          mt-20
          grid
          gap-8

          md:grid-cols-2
          lg:grid-cols-3
          "
        >

          {services.map((service, index) => {

            const Icon = service.icon

            return (

              <div
                key={index}

                className="
                rounded-3xl
                border
                border-gray-200
                bg-white
                p-8

                transition-all
                duration-300

                hover:-translate-y-1
                hover:shadow-xl
                "
              >

                {/* ICON */}

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

                  <Icon
                    className="
                    h-8
                    w-8
                    text-white
                    "
                  />

                </div>

                {/* TITLE */}

                <h3
                  className="
                  mt-8
                  text-2xl
                  font-bold
                  text-gray-900
                  "
                >
                  {service.title}
                </h3>

                {/* DESCRIPTION */}

                <p
                  className="
                  mt-4
                  leading-7
                  text-gray-600
                  "
                >
                  {service.description}
                </p>

              </div>

            )

          })}

        </div>

      </div>

    </section>

  )
}