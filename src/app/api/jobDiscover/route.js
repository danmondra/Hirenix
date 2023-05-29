import { discoverPromptGenerator } from '@/helpers/promptGenerators'
import { NextResponse } from 'next/server'
import { Configuration, OpenAIApi, ChatCompletionRequestMessageRoleEnum } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

export async function POST(req) {
  const { interview } = await req.json()

  const [systemPrompt, userPrompt, responseExample] = discoverPromptGenerator(interview)

  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: ChatCompletionRequestMessageRoleEnum.System,
        content: systemPrompt
      },
      {
        role: ChatCompletionRequestMessageRoleEnum.User,
        content: userPrompt
      },
      {
        role: ChatCompletionRequestMessageRoleEnum.Assistant,
        content: responseExample
      }
    ],
    temperature: 1
  })
  const data = response.data.choices[0].message?.content ?? ''
  console.log(data)

  let json
  try {
    json = JSON.parse(data)
  } catch {
    const firstBracket = data.indexOf('{')
    const lastBracket = data.lastIndexOf('}')
    json = JSON.parse(data.slice(firstBracket, lastBracket + 1))
  }

  return NextResponse.json(json)
}
