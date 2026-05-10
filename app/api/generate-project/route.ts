import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: Request) {

  try {

    if (!process.env.OPENAI_API_KEY) {

      return Response.json({
        success: false,
        error: "OPENAI_API_KEY missing",
      })

    }

    const body = await req.json()

    const completion = await openai.chat.completions.create({

      model: "gpt-4.1-mini",

      messages: [

        {
          role: "system",

          content: `
You are an expert engineering project consultant.

Generate:
1. Project Title
2. Abstract
3. Components Required
4. Technologies Used
5. Working Principle
6. Advantages
7. Future Scope
8. Estimated Cost
          `,
        },

        {
          role: "user",
          content: body.prompt,
        },

      ],

    })

    return Response.json({

      success: true,

      result: completion.choices[0].message.content,

    })

  } catch (error: any) {

    console.log(error)

    return Response.json({

      success: false,

      error: error.message,

    })

  }

}