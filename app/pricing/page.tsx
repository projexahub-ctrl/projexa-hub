"use client"

import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Starter",
    price: "₹2,999",

    popular: false,

    features: [
      "Mini Project",
      "Basic Documentation",
      "Source Code",
      "1 Revision",
    ],
  },

  {
    name: "Professional",
    price: "₹7,999",

    popular: true,

    features: [
      "Major Project",
      "Full Documentation",
      "Source Code",
      "PPT & Report",
      "Technical Support",
    ],
  },

  {
    name: "Enterprise",
    price: "Custom",

    popular: false,

    features: [
      "Advanced Custom Project",
      "Hardware + Software",
      "Full Guidance",
      "Team Support",
      "Deployment Support",
    ],
  },
]

export default function PricingPage() {
  return (
    <main
      className="
      min-h-screen
      bg-[#020617]
      px-6
      py-32
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
          text-center
          "
        >

          <h1
            className="
            text-5xl
            font-black
            md:text-7xl
            "
          >

            Simple{" "}

            <span className="gradient-text">
              Pricing
            </span>

          </h1>

          <p
            className="
            mt-6
            text-lg
            text-slate-400
            "
          >
            Affordable engineering project solutions for every student.
          </p>

        </div>

        <div
          className="
          mt-20
          grid gap-8
          md:grid-cols-3
          "
        >

          {plans.map((plan, index) => (

            <div
              key={index}

              className={`
              glass
              relative
              rounded-[40px]
              p-10
              transition
              hover:-translate-y-2

              ${plan.popular
                ? "border border-purple-500 scale-105"
                : ""}
              `}
            >

              {plan.popular && (

                <div
                  className="
                  absolute
                  right-6
                  top-6
                  rounded-full
                  bg-gradient-to-r
                  from-blue-600
                  to-purple-600
                  px-4 py-2
                  text-sm
                  font-semibold
                  "
                >
                  MOST POPULAR
                </div>

              )}

              <h2
                className="
                text-3xl
                font-black
                "
              >
                {plan.name}
              </h2>

              <p
                className="
                mt-6
                text-5xl
                font-black
                gradient-text
                "
              >
                {plan.price}
              </p>

              <div
                className="
                mt-10
                space-y-4
                "
              >

                {plan.features.map((feature, i) => (

                  <div
                    key={i}

                    className="
                    flex items-center gap-3
                    "
                  >

                    <Check
                      className="
                      h-5 w-5 text-green-400
                      "
                    />

                    <span
                      className="
                      text-slate-300
                      "
                    >
                      {feature}
                    </span>

                  </div>

                ))}

              </div>

              <Button
                className="
                mt-10
                w-full
                rounded-2xl
                bg-gradient-to-r
                from-blue-600
                to-purple-600
                py-6
                text-lg
                "
              >
                Choose Plan
              </Button>

            </div>

          ))}

        </div>

      </div>

    </main>
  )
}