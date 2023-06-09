export function compatibilityPromptGenerator(candidate, job) {
  const systemPrompt = `
    Calculates the candidate"s compatibility with a job offer and returns a JSON from 0 to 100.
    In the missingRequirements separate each one and speak directly to the candidate in Spanish.
    Only return the JSON.
    Don"t be strict and be concise.

    Job offer: 
    ${job}

    Candidate:
    candidateSkills: ${candidate?.skills.join(', ')}
    candidateStudies: ${candidate?.jobAreas}
    candidateExperience: ${candidate?.experience}
    candidateLocation: ${candidate?.location}
  `

  const responseExample = `
    {
      "compatibility": Number,
      "missingRequirements": Array
    }
  `

  return [systemPrompt, responseExample]
}

export function searchPromptGenerator(userSearch) {
  const systemPrompt = `
    Given the information in the text, fill in the properties of the object that apply.
    If there is no information for a property, do not include it in the answer.
    The array that some properties have are the values that that property can have, it must only have one of those values.
    If the text does not give information for a property, returns the property empty
  `

  const userPrompt = userSearch.trim()

  const responseExample = `
    {
      "mainWord": "",
      "category": ["administracion-publica", "administracion-empresas", "atencion-a-cliente", "non-specified", "calidad-produccion-id", "comercial-ventas", "compras-logistica-almacen", "diseno-artes-graficas", "educacion-formacion", "finanzas-banca", "informatica-telecomunicaciones", "ingenieros-tecnicos", "inmobiliario-construccion", "legal", "marketing-comunicacion", "profesiones-artes-oficios", "recursos-humanos", "sanidad-salud", "sector-farmaceutico", "turismo-restauracion", "venta-detalle", "otros"],
      "salaryMin": "",
      "salaryMax": "",
      "salaryPeriod": ["bruto-ano", "bruto-mes", "bruto-hora", "non-specified"],
      "experienceMin": ["no-requerida", "al-menos-1-ano", "al-menos-2-anos", "al-menos-3-anos", "non-specified", "al-menos-4-anos", "mas-de-5-anos", "mas-de-10-anos"],
      "sinceDate": ["24_HOURS", "non-specified", "_7_DAYS", "_15_DAYS", "ANY"]
    }
  `

  return [systemPrompt, userPrompt, responseExample]
}

export function interviewReviewPromptGenerator(interview) {
  const systemPrompt = `
    You are a reviewer and interview counselor, review the following interview and give him feedback or congratulations for each question, so he can improve on each of the questions.
    Also tell him what he said well. Don't be strict. Speak directly to the candidate in Spanish. 
    The response will be in JSON format.
`

  const userPrompt = JSON.stringify(interview)

  const responseExample = `
  [
    {
      id: Number,
      feedback: ''
    },
    {
      id: Number,
      feedback: ''
    },
  ]
  `

  return [systemPrompt, userPrompt, responseExample]
}

export function discoverPromptGenerator(interview) {
  const systemPrompt = 'Based on the interview, break down the information from the answers and create an JSON Object from them. Only return a JSON.'

  const userPrompt = JSON.stringify(interview)

  const responseExample = `
    {
      skills: [],
      experience: '',
      jobAreas: '',
      location: ''
    }
    `

  return [systemPrompt, userPrompt, responseExample]
}

export function techincalTestPromptGenerator(offer) {
  const systemPrompt = `
  Create a technical interview in Spanish with 2 questions from a job offer.
  Only technical questions related to the area of the job offer.
  The response will be in JSON format, do not give descriptions or explanations. 
  Create new questions`

  const userPrompt = `
  Job:
  ${offer?.title}
  Job Requirements:
  ${offer?.skillsList.map(skill => skill.skill).join(', ')}
  Job Description:
  ${offer?.description}
  `

  const responseExample = `
  [
    {
      "id": 0,
      "question": "¿Cuál es el resultado de Boolean(NaN) en JavaScript?"
    },
    {
      "id": 1,
      "question": "¿Cuáles son los 4 pilares de la programación orientada a objetos?"
    }
  ]
`

  return [systemPrompt, userPrompt, responseExample]
}

export function searchByProfileGenerator(user) {
  const systemPrompt = `
  Which category fits the skills list
  The response will be in JSON format, do not give descriptions or explanations. 
  Only give me a JSON Object
  `

  const userPrompt = `
    candidateSkills: ${user?.skills.join(', ')}
  `

  const responseExample = `
    {
      "category": ["administracion-publica", "administracion-empresas", "atencion-a-cliente", "non-specified", "calidad-produccion-id", "comercial-ventas", "compras-logistica-almacen", "diseno-artes-graficas", "educacion-formacion", "finanzas-banca", "informatica-telecomunicaciones", "ingenieros-tecnicos", "inmobiliario-construccion", "legal", "marketing-comunicacion", "profesiones-artes-oficios", "recursos-humanos", "sanidad-salud", "sector-farmaceutico", "turismo-restauracion", "venta-detalle", "otros"],
    }
  `

  console.log(userPrompt)

  return [systemPrompt, userPrompt, responseExample]
}
