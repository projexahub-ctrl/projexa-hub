import Link from "next/link"

import {
  Camera,
  LinkIcon,
  Gift,
  Mail,
} from "lucide-react"

export default function Footer() {
  return (
    <footer
      className="
      border-t
      border-white/10
      bg-[#020617]
      px-6
      py-20
      text-white
      "
    >

      <div
        className="
        mx-auto
        max-w-7xl
        "
      >

        <div
          className="
          grid gap-12
          md:grid-cols-4
          "
        >

          <div>

            <h2
              className="
              gradient-text
              text-4xl
              font-black
              "
            >
              ProjexaHub
            </h2>

            <p
              className="
              mt-6
              leading-relaxed
              text-slate-400
              "
            >
              Transforming engineering ideas into real-world
              innovations with premium project solutions.
            </p>

          </div>

          <div>

            <h3
              className="
              text-xl
              font-bold
              "
            >
              Quick Links
            </h3>

            <div
              className="
              mt-6
              flex flex-col gap-4
              "
            >

              <Link
                href="/projects"
                className="text-slate-400 transition hover:text-white"
              >
                Projects
              </Link>

              <Link
                href="/pricing"
                className="text-slate-400 transition hover:text-white"
              >
                Pricing
              </Link>

              <Link
                href="/submit-project"
                className="text-slate-400 transition hover:text-white"
              >
                Submit Project
              </Link>

            </div>

          </div>

          <div>

            <h3
              className="
              text-xl
              font-bold
              "
            >
              Services
            </h3>

            <div
              className="
              mt-6
              flex flex-col gap-4
              text-slate-400
              "
            >

              <p>AI/ML Projects</p>

              <p>IoT Projects</p>

              <p>Mechanical Projects</p>

              <p>Robotics</p>

            </div>

          </div>

          <div>

            <h3
              className="
              text-xl
              font-bold
              "
            >
              Connect
            </h3>

            <div
              className="
              mt-6
              flex gap-4
              "
            >

              <a
                href="#"
                className="
                flex h-12 w-12 items-center justify-center
                rounded-2xl
                bg-white/5
                transition hover:bg-white/10
                "
              >
                <Camera className="h-5 w-5" />
              </a>

              <a
                href="#"
                className="
                flex h-12 w-12 items-center justify-center
                rounded-2xl
                bg-white/5
                transition hover:bg-white/10
                "
              >
                <LinkIcon className="h-5 w-5" />
              </a>

              <a
                href="#"
                className="
                flex h-12 w-12 items-center justify-center
                rounded-2xl
                bg-white/5
                transition hover:bg-white/10
                "
              >
                <Gift className="h-5 w-5" />
              </a>

              <a
                href="#"
                className="
                flex h-12 w-12 items-center justify-center
                rounded-2xl
                bg-white/5
                transition hover:bg-white/10
                "
              >
                <Mail className="h-5 w-5" />
              </a>

            </div>

          </div>

        </div>

        <div
          className="
          mt-16
          border-t border-white/10
          pt-8
          text-center
          text-slate-500
          "
        >

          © 2026 ProjexaHub. All rights reserved.

        </div>

      </div>

    </footer>
  )
}