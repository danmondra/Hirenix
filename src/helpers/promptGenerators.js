export function compatibilityPromptGenerator(candidate, job) {
  const promptSystem = `
    Calculates the compatibility of the job requirements with the candidate and returns in JSON format an object.
    0 indicates no compatibility and 100 that the user fulfills a requirement.
    Dont give me explanations or descriptions

    requiredStudies: ${job.studies}
    candidateStudies: ${candidate.studies}
    requiredSkills: ${job.skills.map(({ skill }) => skill).join(', ')},
    candidateSkills: ${candidate.skills.join(', ')}
    requiredExperience: ${job.experience}
    candidateExperience: ${candidate.experience}
  `

  const responseExample = `
    {
      studiesCompatibility: Number,
      experienceCompatibility: Number,
      skillsCompatibility: Number
    }
  `

  return [promptSystem, responseExample]
}
