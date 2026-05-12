import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function CustomAISection() {

  return (

    <section
      id="custom-ai"
      className="
      bg-gray-50
      py-24
      "
    >

      <div
        className="
        mx-auto
        max-w-6xl
        px-6
        "
      >

        <div
          className="
          overflow-hidden
          rounded-[40px]
          border
          border-gray-200
          bg-white
          p-12
          shadow-sm
          "
        >

          <div
            className="
            grid
            items-center
            gap-12

            md:grid-cols-2
            "
          >

            {/* LEFT CONTENT */}

            <div>

              <div
                className="
                inline-flex
                items-center
                rounded-full
                bg-blue-100
                px-4
                py-2
                text-sm
                font-medium
                text-blue-700
                "
              >
                AI PROJECT GENERATOR
              </div>

              <h2
                className="
                mt-6
                text-4xl
                font-bold
                leading-tight
                text-gray-900

                md:text-5xl
                "
              >
                Need a Custom
                <br />
                Engineering Project?
              </h2>

              <p
                className="
                mt-6
                text-lg
                leading-8
                text-gray-600
                "
              >
                Describe your project idea and generate
                professional engineering solutions instantly
                using our AI-powered project generation system.
              </p>

              <div className="mt-10">

                <Link href="/custom-project">

                  <Button
                    size="lg"

                    className="
                    rounded-xl
                    bg-black
                    px-8
                    py-6
                    text-lg
                    text-white
                    hover:bg-gray-800
                    "
                  >
                    Generate Custom Project
                  </Button>

                </Link>

              </div>

            </div>

            {/* RIGHT IMAGE */}

            <div
              className="
              relative
              flex
              items-center
              justify-center
              "
            >

              <img
                src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=1200&auto=format&fit=crop"

                alt="AI Engineering Project"

                className="
                w-full
                rounded-[40px]
                border
                border-gray-200
                shadow-xl
                object-cover
                "
              />

            </div>

          </div>

        </div>

      </div>

    </section>

  )

}