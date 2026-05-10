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
    title: "AI/ML Projects",
    icon: Brain,
    description:
      "Machine learning, deep learning and intelligent systems.",
  },
  {
    title: "IoT Projects",
    icon: Cpu,
    description:
      "Smart automation systems with sensors and connectivity.",
  },
  {
    title: "Robotics",
    icon: Bot,
    description:
      "Autonomous robots and intelligent robotic systems.",
  },
  {
    title: "Mechanical Projects",
    icon: Wrench,
    description:
      "Innovative fabrication and mechanical engineering solutions.",
  },
  {
    title: "Software Solutions",
    icon: Code,
    description:
      "Websites, apps and custom software development.",
  },
  {
    title: "Electrical Projects",
    icon: Zap,
    description:
      "Embedded systems and automation projects.",
  },
]

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-32"
    >

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <h2 className="text-5xl font-black">
            Premium Engineering{" "}
            <span className="gradient-text">
              Solutions
            </span>
          </h2>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <div
                key={index}
                className="glass group rounded-3xl p-8 transition duration-300 hover:-translate-y-2"
              >

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600">

                  <Icon className="h-8 w-8 text-white" />

                </div>

                <h3 className="text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 text-slate-400 leading-relaxed">
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