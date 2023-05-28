export function compatibilityPromptGenerator(candidate, job) {
  const systemPrompt = `
    Calculates the candidate"s compatibility with a job offer and returns a JSON from 0 to 100.
    In the missingRequirements separate each one and speak directly to the candidate in Spanish.
    Only return the JSON.
    Don"t be strict and be concise.

    Job offer: 
    ${job}

    Candidate:
    candidateStudies: ${candidate.studies}
    candidateSkills: ${candidate.skills.join(', ')}
    candidateExperience: ${candidate.experience}
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
  `

  const userPrompt = userSearch.trim()

  const responseExample = `
    {
      "mainWord": "",
      "province": "",
      "category": ["administracion-publica", "administracion-empresas", "atencion-a-cliente", "calidad-produccion-id", "comercial-ventas", "compras-logistica-almacen", "diseno-artes-graficas", "educacion-formacion", "finanzas-banca", "informatica-telecomunicaciones", "ingenieros-tecnicos", "inmobiliario-construccion", "legal", "marketing-comunicacion", "profesiones-artes-oficios", "recursos-humanos", "sanidad-salud", "sector-farmaceutico", "turismo-restauracion", "venta-detalle", "otros"],
      "city": "",
      "country": "",
      "salaryMin": "",
      "salaryMax": "",
      "salaryPeriod": ["bruto-ano", "bruto-mes", "bruto-hora"],
      "study": ["sin-estudios", "educacion-secundaria-obligatoria", "bachillerato", "ciclo-formativo-grado-medio", "ciclo-formativo-grado-superior", "ensenanzas-artisticas-regladas", "ensenanzas-deportivas-regladas", "grado", "licenciado", "diplomado", "ingeniero-tecnico", "ingeniero-superior", "postgrado", "master", "doctorado", "otros-titulos-certificaciones-y-carnes", "otros-cursos-y-formacion-no-reglada", "formacion-profesional-grado-medio", "formacion-profesional-grado-superior"],
      "experienceMin": ["no-requerida", "al-menos-1-ano", "al-menos-2-anos", "al-menos-3-anos", "al-menos-4-anos", "mas-de-5-anos", "mas-de-10-anos"],
      "sinceDate": ["24_HOURS", "_7_DAYS", "_15_DAYS"]
    }
  `

  return [systemPrompt, userPrompt, responseExample]
}
