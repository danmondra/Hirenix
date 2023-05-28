export function compatibilityPromptGenerator(candidate, job) {
  const promptSystem = `
    Calculates the candidate's compatibility with a job offer and returns a JSON from 0 to 100.
    In the missingRequirements separate each one and speak directly to the candidate in Spanish.
    Only return the JSON.
    Don't be strict and be concise.

    Job offer: 
    ${job}

    Candidate:
    candidateStudies: ${candidate.studies}
    candidateSkills: ${candidate.skills.join(', ')}
    candidateExperience: ${candidate.experience}
  `

  const responseExample = `
    {
      compatibility: Number,
      missingRequirements: Array
    }
  `

  return [promptSystem, responseExample]
}
