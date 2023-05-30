import { NextResponse } from 'next/server'
import { Configuration, OpenAIApi, ChatCompletionRequestMessageRoleEnum } from 'openai'
import { searchPromptGenerator } from '@/helpers/promptGenerators'
import { filterParamsInfojobs } from '@/consts/infojobsFiltersDictionary'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

export async function POST(req) {
  const { userSearch } = await req.json()

  const [systemPrompt, userPrompt, responseExample] = searchPromptGenerator(userSearch)

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

  let json
  try {
    json = JSON.parse(data)
  } catch {
    const firstBracket = data.indexOf('{')
    const lastBracket = data.lastIndexOf('}')
    json = JSON.parse(data.slice(firstBracket, lastBracket + 1))
  }

  const dataToArray = Object.entries(json)

  // Filter data that only have a valid value
  const dataWithValue = dataToArray.filter(prop =>
    (prop[1].length > 0 && prop[1][0] !== 'non-specified' && prop[1] !== 'non-specified') || typeof prop[1] === 'number'
  )

  // Convert values to string
  const stringValues = dataWithValue.map(prop => {
    if(typeof prop[1] === 'object') return [prop[0], prop[1][0]]
    if(typeof prop[1] === 'number') return [prop[0], prop[1].toString()]
    return prop
  })

  const cleanMainProperty = stringValues.map(prop =>
    prop[0] === 'mainWord' ? ['q', prop[1].replaceAll(', ', ' ')] : prop)

  const cleanMainProperties = cleanMainProperty.map(prop =>
    prop[1] === 'bruto-anual' ? [prop[0], 'bruto-ano'] : prop)

  // Verify that properties can be existing filters
  const filters = Object.keys(filterParamsInfojobs)
  const filterProperties = cleanMainProperties.filter(prop => filters.includes(prop[0]))

  const dataCleaned = Object.fromEntries(filterProperties)

  return NextResponse.json(dataCleaned)
}
