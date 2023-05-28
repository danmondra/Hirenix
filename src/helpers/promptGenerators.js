export function compatibilityPromptGenerator(candidate, job) {
  const promptSystem = `
    Calculates the candidate's compatibility with a job offer and returns a JSON from 0 to 100.
    Don't be strict. In the reasons speak directly to the candidate in Spanish.

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
      reasons: String,
      missingRequirements: Array
    }
  `

  return [promptSystem, responseExample]
}
