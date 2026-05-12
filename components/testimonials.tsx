const testimonials = [

  {
    name: "Rahul Kumar",
    college: "VTU",

    review:
      "ProjexaHub helped us complete our final year robotics project professionally with proper guidance and implementation support.",
  },

  {
    name: "Akhil Reddy",
    college: "BMS College of Engineering",

    review:
      "The best engineering project platform for students looking for innovative and industry-ready project solutions.",
  },

  {
    name: "Sanjana S",
    college: "RV College of Engineering",

    review:
      "Excellent support team and high-quality project documentation. The entire process was smooth and professional.",
  },

]

export default function Testimonials() {

  return (

    <section
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
            TESTIMONIALS
          </div>

          <h2
            className="
            mt-6
            text-5xl
            font-bold
            text-gray-900
            "
          >
            What Students Say About Us
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
            Trusted by engineering students across multiple colleges
            for innovative project development and technical support.
          </p>

        </div>

        {/* TESTIMONIAL GRID */}

        <div
          className="
          mt-20
          grid
          gap-8

          md:grid-cols-2
          lg:grid-cols-3
          "
        >

          {testimonials.map((t, i) => (

            <div
              key={i}

              className="
              rounded-3xl
              border
              border-gray-200
              bg-white
              p-10

              transition-all
              duration-300

              hover:-translate-y-1
              hover:shadow-xl
              "
            >

              {/* REVIEW */}

              <p
                className="
                text-lg
                leading-8
                text-gray-600
                "
              >
                “{t.review}”
              </p>

              {/* USER */}

              <div
                className="
                mt-8
                flex
                items-center
                gap-4
                "
              >

                <div
                  className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center

                  rounded-full

                  bg-black

                  text-lg
                  font-bold
                  text-white
                  "
                >
                  {t.name.charAt(0)}
                </div>

                <div>

                  <h4
                    className="
                    text-lg
                    font-bold
                    text-black
                    "
                  >
                    {t.name}
                  </h4>

                  <p className="text-gray-500">
                    {t.college}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}