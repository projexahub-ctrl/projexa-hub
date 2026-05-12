import Link from "next/link"

import {
  Camera,
  LinkIcon,
  Mail,
  Phone,
} from "lucide-react"

export default function Footer() {

  return (

    <footer
      className="
      border-t
      border-gray-200
      bg-white
      px-6
      py-20
      text-black
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
          grid
          gap-12

          md:grid-cols-4
          "
        >

          {/* BRAND */}

          <div>

            <h2
              className="
              text-4xl
              font-extrabold
              tracking-tight
              text-black
              "
            >
              ProjexaHub
            </h2>

            <p
              className="
              mt-6
              leading-8
              text-gray-600
              "
            >
              Transforming engineering ideas into
              real-world innovations with premium
              final year project solutions and
              technical support.
            </p>

          </div>

          {/* QUICK LINKS */}

          <div>

            <h3
              className="
              text-xl
              font-bold
              text-black
              "
            >
              Quick Links
            </h3>

            <div
              className="
              mt-6
              flex
              flex-col
              gap-4
              "
            >

              <Link
                href="/"
                className="
                text-gray-600
                transition
                hover:text-black
                "
              >
                Home
              </Link>

              <Link
                href="/projects"
                className="
                text-gray-600
                transition
                hover:text-black
                "
              >
                Projects
              </Link>

              <Link
                href="/contact"
                className="
                text-gray-600
                transition
                hover:text-black
                "
              >
                Contact
              </Link>

            </div>

          </div>

          {/* SERVICES */}

          <div>

            <h3
              className="
              text-xl
              font-bold
              text-black
              "
            >
              Services
            </h3>

            <div
              className="
              mt-6
              flex
              flex-col
              gap-4
              text-gray-600
              "
            >

              <p>AI/ML Projects</p>

              <p>IoT Projects</p>

              <p>Mechanical Projects</p>

              <p>Robotics Systems</p>

              <p>Research Assistance</p>

            </div>

          </div>

          {/* CONTACT */}

          <div>

            <h3
              className="
              text-xl
              font-bold
              text-black
              "
            >
              Contact
            </h3>

            <div className="mt-6 space-y-5">

              <div
                className="
                flex
                items-center
                gap-3
                text-gray-600
                "
              >

                <Mail className="h-5 w-5" />

                <p>
                  support@projexahub.in
                </p>

              </div>

              <div
                className="
                flex
                items-center
                gap-3
                text-gray-600
                "
              >

                <Phone className="h-5 w-5" />

                <p>
                  +91 9999999999
                </p>

              </div>

              {/* SOCIALS */}

              <div
                className="
                mt-6
                flex
                gap-4
                "
              >

                <a
                  href="#"

                  className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center

                  rounded-xl

                  border
                  border-gray-200

                  transition

                  hover:bg-gray-100
                  "
                >

                  <Camera className="h-5 w-5" />

                </a>

                <a
                  href="#"

                  className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center

                  rounded-xl

                  border
                  border-gray-200

                  transition

                  hover:bg-gray-100
                  "
                >

                  <LinkIcon className="h-5 w-5" />

                </a>

              </div>

            </div>

          </div>

        </div>

        {/* COPYRIGHT */}

        <div
          className="
          mt-16
          border-t
          border-gray-200
          pt-8
          text-center
          text-gray-500
          "
        >

          © 2026 ProjexaHub. All rights reserved.

        </div>

      </div>

    </footer>

  )
}