import { compatibilityPromptGenerator } from '@/helpers/promptGenerators'
import { NextResponse } from 'next/server'
import { Configuration, OpenAIApi, ChatCompletionRequestMessageRoleEnum } from 'openai'
import { getOfferById } from '@/services/getOffers'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

export async function POST(req) {
  const userProfileGenerated = req.cookies.get('userProfileGenerated')
  const userProfileGeneratedDecoded = JSON.parse(decodeURIComponent(userProfileGenerated.value))

  const { offerId } = await req.json()
  const offer = await getOfferById(offerId)

  const [systemPrompt, responseExample] = compatibilityPromptGenerator(userProfileGeneratedDecoded, offer?.description)

  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: ChatCompletionRequestMessageRoleEnum.System,
        content: systemPrompt
      },
      {
        role: ChatCompletionRequestMessageRoleEnum.Assistant,
        content: responseExample
      }
    ],
    temperature: 1
  })
  const data = response.data.choices[0].message?.content ?? ''

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
