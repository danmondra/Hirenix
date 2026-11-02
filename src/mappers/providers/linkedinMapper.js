/**
 * LinkedIn-specific mapper (EXAMPLE - not implemented)
 * Maps LinkedIn API responses to our domain model
 * 
 * This is a template showing how to add a new provider
 */

/**
 * Maps a LinkedIn job detail response to our domain model
 * @param {Object} linkedinJob - The job object from LinkedIn API
 * @returns {import('@/domain/offer').JobOffer|null}
 */
export function mapLinkedInDetailToDomain(linkedinJob) {
  if (!linkedinJob) {
    return null
  }

  // Example mapping - adjust based on actual LinkedIn API structure
  return {
    id: linkedinJob.jobId || null,
    title: linkedinJob.title || '',
    description: linkedinJob.description?.text || '',
    requirementMin: linkedinJob.qualifications || '',

    author: {
      id: linkedinJob.company?.id || null,
      name: linkedinJob.company?.name || '',
      logoUrl: linkedinJob.company?.logo || null,
      uri: linkedinJob.company?.url || null
    },

    city: linkedinJob.location?.city || '',
    province: {
      id: null, // LinkedIn might not have province IDs
      value: linkedinJob.location?.state || linkedinJob.location?.region || ''
    },

    salaryMin: {
      id: null,
      value: linkedinJob.salary?.min || null
    },
    salaryMax: {
      id: null,
      value: linkedinJob.salary?.max || null
    },
    salaryPeriod: {
      id: null,
      value: linkedinJob.salary?.period || 'anual'
    },

    experienceMin: {
      id: null,
      value: linkedinJob.experienceLevel || ''
    },

    teleworking: {
      id: null,
      value: linkedinJob.workplaceType || '' // 'Remote', 'Hybrid', 'On-site'
    },

    contractType: {
      id: null,
      value: linkedinJob.employmentType || '' // 'Full-time', 'Part-time', 'Contract'
    },

    workDay: {
      id: null,
      value: linkedinJob.employmentType?.includes('Full') ? 'completa' : 'parcial'
    },

    study: {
      id: null,
      value: linkedinJob.educationLevel || ''
    },

    category: {
      id: null,
      value: linkedinJob.industries?.[0] || ''
    },

    subcategory: {
      id: null,
      value: linkedinJob.jobFunctions?.[0] || ''
    },

    link: linkedinJob.url || null,
    published: linkedinJob.listedAt || null,
    updated: linkedinJob.updatedAt || null,

    residence: {
      id: null,
      value: linkedinJob.location?.country || ''
    },

    languages: [], // LinkedIn might not provide this in the same format
    skillsList: (linkedinJob.skills || []).map(skill => ({ skill })),

    bold: false,
    applications: linkedinJob.applicantCount?.toString() || '0',
    executive: linkedinJob.seniorityLevel === 'Executive' || false,
    salaryDescription: linkedinJob.salary?.description || '',
    multiProvince: false
  }
}

/**
 * Maps a LinkedIn job list response to our domain model
 * @param {Object} linkedinResponse - The response object from LinkedIn list API
 * @returns {import('@/domain/offer').JobOffer[]}
 */
export function mapLinkedInListToDomain(linkedinResponse) {
  if (!linkedinResponse?.jobs || !Array.isArray(linkedinResponse.jobs)) {
    return []
  }

  return linkedinResponse.jobs.map(mapLinkedInDetailToDomain)
}
