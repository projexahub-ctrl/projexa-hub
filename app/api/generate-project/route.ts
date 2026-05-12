import { NextResponse } from "next/server"

export async function POST(
  req: Request
) {

  try {

    const body =
      await req.json()

    const prompt =
      body.prompt || ""

    const department =
      body.department || ""

    const budget =
      body.budget || ""

    // GEMINI API CALL

    const response =
      await fetch(

        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,

        {

          method: "POST",

          headers: {

            "Content-Type":
              "application/json",

          },

          body: JSON.stringify({

            contents: [

              {

                parts: [

                  {

                    text:

`
Generate a completely unique engineering project.

User Idea:
${prompt}

Department:
${department}

Budget:
${budget}

IMPORTANT:
- Return ONLY valid JSON
- No markdown
- Give unique description
- Give exact components
- Features must be relevant
- Technologies must be relevant

FORMAT:

{
  "title": "",
  "description": "",
  "technologies": "",
  "budget": "",
  "features": [],
  "components": []
}
                    `,

                  },

                ],

              },

            ],

          }),

        }
      )

    const data =
      await response.json()

    console.log(data)

    // FALLBACK IF GEMINI FAILS

    if (data.error) {

      const lower =
        prompt.toLowerCase()

      let technologies = ""

      let description = ""

      let features: string[] = []

      let components: string[] = []

      // FIRE FIGHTING ROBOT

      if (
        lower.includes("fire")
      ) {

        technologies =
          "Arduino + Robotics + IoT"

        description =
          `The ${prompt} project is designed to automatically detect and extinguish fire using intelligent robotics and embedded systems. The robot enhances industrial and residential safety through autonomous navigation and real-time fire detection.`

        features = [

          "Automatic fire detection",

          "Autonomous robot movement",

          "Obstacle avoidance",

          "Water spray extinguishing",

          "Wireless monitoring",

        ]

        components = [

          "Arduino UNO",

          "Flame Sensor",

          "Ultrasonic Sensor",

          "Motor Driver Module",

          "DC Motors",

          "Servo Motor",

          "Water Pump",

          "Bluetooth Module",

          "Rechargeable Battery",

          "Robot Chassis",

        ]

      }

      // AGRICULTURE

      else if (

        lower.includes("agriculture") ||

        lower.includes("farming")

      ) {

        technologies =
          "IoT + ESP32 + Smart Sensors"

        description =
          `The ${prompt} project automates agricultural monitoring using IoT and sensor technologies. It helps improve irrigation efficiency, crop productivity, and smart farming operations.`

        features = [

          "Automatic irrigation",

          "Soil moisture monitoring",

          "Cloud connectivity",

          "Mobile notifications",

          "Low power operation",

        ]

        components = [

          "ESP32",

          "Soil Moisture Sensor",

          "DHT11 Sensor",

          "Relay Module",

          "Water Pump",

          "LCD Display",

          "Power Supply",

          "Connecting Wires",

        ]

      }

      // AI PROJECTS

      else if (

        lower.includes("ai") ||

        lower.includes("machine learning")

      ) {

        technologies =
          "Python + AI + Machine Learning"

        description =
          `The ${prompt} project uses artificial intelligence and machine learning algorithms for smart prediction, automation, and real-time data analysis applications.`

        features = [

          "AI prediction system",

          "Real-time data processing",

          "Smart automation",

          "Cloud integration",

          "High accuracy analysis",

        ]

        components = [

          "Raspberry Pi",

          "Camera Module",

          "Python",

          "TensorFlow",

          "OpenCV",

          "WiFi Module",

          "Power Supply",

        ]

      }

      // DRONE PROJECTS

      else if (
        lower.includes("drone")
      ) {

        technologies =
          "Pixhawk + GPS + IoT"

        description =
          `The ${prompt} project focuses on intelligent drone automation for monitoring, navigation, and real-time applications using advanced flight control systems.`

        features = [

          "Autonomous flight",

          "GPS navigation",

          "Live monitoring",

          "Obstacle detection",

          "Wireless communication",

        ]

        components = [

          "Pixhawk Flight Controller",

          "Brushless Motors",

          "ESC",

          "GPS Module",

          "LiPo Battery",

          "Drone Frame",

          "Propellers",

          "Telemetry Module",

        ]

      }

      // DEFAULT

      else {

        technologies =
          "Arduino + IoT + Embedded Systems"

        description =
          `The ${prompt} project is an innovative ${department} engineering system designed for automation, monitoring, and practical real-world implementation.`

        features = [

          "Smart automation",

          "Efficient monitoring",

          "Low power consumption",

          "Modern engineering design",

          "Scalable implementation",

        ]

        components = [

          "Arduino UNO",

          "Sensors",

          "Relay Module",

          "Power Supply",

          "Jumper Wires",

          "PCB Board",

          "LCD Display",

        ]

      }

      return NextResponse.json({

        success: true,

        project: {

          title:
            `${prompt} Project`,

          description,

          technologies,

          budget:
            budget ||
            "₹10,000 - ₹20,000",

          features,

          components,

        },

      })

    }

    // GET AI TEXT

    const text =
      data.candidates?.[0]
      ?.content?.parts?.[0]
      ?.text

    const cleaned =
      text
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim()

    const project =
      JSON.parse(cleaned)

    return NextResponse.json({

      success: true,

      project,

    })

  } catch (error) {

    console.log(error)

    return NextResponse.json({

      success: true,

      project: {

        title:
          "Smart Engineering Project",

        description:
          "An AI generated engineering project with automation and smart implementation.",

        technologies:
          "IoT + AI + Embedded Systems",

        budget:
          "₹8,000 - ₹18,000",

        features: [

          "Automation",

          "AI integration",

          "Monitoring",

          "Modern design",

        ],

        components: [

          "Arduino UNO",

          "ESP32",

          "Sensors",

          "Battery",

          "Motor Driver",

          "LCD Display",

        ],

      },

    })

  }

}