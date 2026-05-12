export default function BuildAndEarnPage() {

  return (

    <main
      className="
      min-h-screen
      bg-[#f8fafc]
      px-6
      py-32
      text-black
      "
    >

      <div
        className="
        mx-auto
        max-w-7xl
        "
      >

        {/* HERO */}

        <div className="text-center">

          <div
            className="
            inline-flex
            rounded-full
            bg-blue-100
            px-5
            py-2
            text-sm
            font-medium
            text-blue-700
            "
          >
            EARN WITH PROJEXAHUB
          </div>

          <h1
            className="
            mt-8
            text-6xl
            font-black
            leading-tight
            "
          >
            Build Projects.
            <br />
            Earn Money.
          </h1>

          <p
            className="
            mx-auto
            mt-8
            max-w-3xl
            text-xl
            leading-9
            text-gray-600
            "
          >
            Join ProjexaHub as a student developer,
            designer or technical contributor and
            earn money by helping build real-world
            engineering projects.
          </p>

        </div>

        {/* FEATURES */}

        <div
          className="
          mt-24
          grid
          gap-8

          md:grid-cols-3
          "
        >

          <div
            className="
            rounded-3xl
            border
            border-gray-200
            bg-white
            p-10
            shadow-sm
            "
          >

            <h2
              className="
              text-3xl
              font-bold
              "
            >
              Work On Projects
            </h2>

            <p
              className="
              mt-5
              text-gray-600
              leading-8
              "
            >
              Collaborate on AI, IoT, robotics,
              mechanical and software projects.
            </p>

          </div>

          <div
            className="
            rounded-3xl
            border
            border-gray-200
            bg-white
            p-10
            shadow-sm
            "
          >

            <h2
              className="
              text-3xl
              font-bold
              "
            >
              Earn Income
            </h2>

            <p
              className="
              mt-5
              text-gray-600
              leading-8
              "
            >
              Get paid for your technical skills,
              innovation and project contribution.
            </p>

          </div>

          <div
            className="
            rounded-3xl
            border
            border-gray-200
            bg-white
            p-10
            shadow-sm
            "
          >

            <h2
              className="
              text-3xl
              font-bold
              "
            >
              Build Experience
            </h2>

            <p
              className="
              mt-5
              text-gray-600
              leading-8
              "
            >
              Gain real-world engineering experience
              and strengthen your resume portfolio.
            </p>

          </div>

        </div>

        {/* FORM */}

        <div
          className="
          mt-24
          rounded-[32px]
          border
          border-gray-200
          bg-white
          p-10
          shadow-sm
          "
        >

          <h2
            className="
            text-4xl
            font-black
            "
          >
            Join The Team
          </h2>

          <p
            className="
            mt-4
            text-gray-600
            "
          >
            Fill your details and our team will contact you.
          </p>

          <div
            className="
            mt-10
            grid
            gap-6

            md:grid-cols-2
            "
          >

            <input
              placeholder="Full Name"

              className="
              h-14
              rounded-2xl
              border
              border-gray-300
              px-5
              outline-none
              "
            />

            <input
              placeholder="Email Address"

              className="
              h-14
              rounded-2xl
              border
              border-gray-300
              px-5
              outline-none
              "
            />

            <input
              placeholder="Phone Number"

              className="
              h-14
              rounded-2xl
              border
              border-gray-300
              px-5
              outline-none
              "
            />

            <input
              placeholder="Skills (AI, Web, IoT...)"

              className="
              h-14
              rounded-2xl
              border
              border-gray-300
              px-5
              outline-none
              "
            />

          </div>

          <textarea
            placeholder="Tell us about your experience..."

            rows={6}

            className="
            mt-6
            w-full
            rounded-2xl
            border
            border-gray-300
            p-5
            outline-none
            "
          />

          <button
            className="
            mt-8
            h-14
            w-full
            rounded-2xl
            bg-black
            text-lg
            font-semibold
            text-white
            transition
            hover:bg-gray-800
            "
          >
            Submit Application
          </button>

        </div>

      </div>

    </main>

  )

}