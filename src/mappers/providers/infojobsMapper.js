/**
 * Infojobs-specific mapper
 * Maps Infojobs API responses to our domain model
 */

/**
 * Maps an Infojobs offer detail response to our domain model
 * @param {Object} infojobsOffer - The offer object from Infojobs detail API
 * @returns {import('@/domain/offer').JobOffer|null}
 */
export function mapInfojobsDetailToDomain(infojobsOffer) {
  if (!infojobsOffer) {
    return null
  }

  return {
    id: infojobsOffer.id || null,
    title: infojobsOffer.title || '',
    description: infojobsOffer.description || '',
    requirementMin: infojobsOffer.minRequirements || infojobsOffer.requirementMin || '',

    author: {
      id: infojobsOffer.profile?.id || infojobsOffer.author?.id || null,
      name: infojobsOffer.profile?.name || infojobsOffer.author?.name || '',
      logoUrl: infojobsOffer.profile?.logoUrl || infojobsOffer.author?.logoUrl || null,
      uri: infojobsOffer.profile?.uri || infojobsOffer.author?.uri || null
    },

    city: infojobsOffer.city || '',
    province: {
      id: infojobsOffer.province?.id || null,
      value: infojobsOffer.province?.value || ''
    },

    salaryMin: {
      id: infojobsOffer.salaryMin?.id || null,
      value: infojobsOffer.salaryMin?.value || null
    },
    salaryMax: {
      id: infojobsOffer.salaryMax?.id || null,
      value: infojobsOffer.salaryMax?.value || null
    },
    salaryPeriod: {
      id: infojobsOffer.salaryPeriod?.id || null,
      value: infojobsOffer.salaryPeriod?.value || ''
    },

    experienceMin: {
      id: infojobsOffer.experienceMin?.id || null,
      value: infojobsOffer.experienceMin?.value || ''
    },

    teleworking: {
      id: infojobsOffer.teleworking?.id || null,
      value: infojobsOffer.teleworking?.value || ''
    },

    contractType: {
      id: infojobsOffer.contractType?.id || null,
      value: infojobsOffer.contractType?.value || ''
    },

    workDay: {
      id: infojobsOffer.workDay?.id || infojobsOffer.journey?.id || null,
      value: infojobsOffer.workDay?.value || infojobsOffer.journey?.value || ''
    },

    study: {
      id: infojobsOffer.study?.id || infojobsOffer.studiesMin?.id || null,
      value: infojobsOffer.study?.value || infojobsOffer.studiesMin?.value || ''
    },

    category: {
      id: infojobsOffer.category?.id || null,
      value: infojobsOffer.category?.value || ''
    },

    subcategory: {
      id: infojobsOffer.subcategory?.id || null,
      value: infojobsOffer.subcategory?.value || ''
    },

    link: infojobsOffer.link || null,
    published: infojobsOffer.creationDate || infojobsOffer.published || null,
    updated: infojobsOffer.updated || infojobsOffer.creationDate || null,

    residence: {
      id: infojobsOffer.residence?.id || null,
      value: infojobsOffer.residence?.value || ''
    },

    languages: infojobsOffer.languages || [],
    skillsList: infojobsOffer.skillsList || [],

    bold: infojobsOffer.bold || false,
    applications: infojobsOffer.applications || '0',
    executive: infojobsOffer.executive || false,
    salaryDescription: infojobsOffer.salaryDescription || '',
    multiProvince: infojobsOffer.multiProvince || false
  }
}

/**
 * Maps an Infojobs list item to our domain model
 * @param {Object} infojobsListItem - Single offer from Infojobs list API
 * @returns {import('@/domain/offer').JobOffer}
 */
export function mapInfojobsListItemToDomain(infojobsListItem) {
  return {
    id: infojobsListItem.id || null,
    title: infojobsListItem.title || '',
    description: '', // Not available in list response
    requirementMin: infojobsListItem.requirementMin || '',

    author: {
      id: infojobsListItem.author?.id || null,
      name: infojobsListItem.author?.name || '',
      logoUrl: infojobsListItem.author?.logoUrl || null,
      uri: infojobsListItem.author?.uri || null
    },

    city: infojobsListItem.city || '',
    province: {
      id: infojobsListItem.province?.id || null,
      value: infojobsListItem.province?.value || ''
    },

    salaryMin: {
      id: infojobsListItem.salaryMin?.id || null,
      value: infojobsListItem.salaryMin?.value || null
    },
    salaryMax: {
      id: infojobsListItem.salaryMax?.id || null,
      value: infojobsListItem.salaryMax?.value || null
    },
    salaryPeriod: {
      id: infojobsListItem.salaryPeriod?.id || null,
      value: infojobsListItem.salaryPeriod?.value || ''
    },

    experienceMin: {
      id: infojobsListItem.experienceMin?.id || null,
      value: infojobsListItem.experienceMin?.value || ''
    },

    teleworking: {
      id: infojobsListItem.teleworking?.id || null,
      value: infojobsListItem.teleworking?.value || ''
    },

    contractType: {
      id: infojobsListItem.contractType?.id || null,
      value: infojobsListItem.contractType?.value || ''
    },

    workDay: {
      id: infojobsListItem.workDay?.id || null,
      value: infojobsListItem.workDay?.value || ''
    },

    study: {
      id: infojobsListItem.study?.id || null,
      value: infojobsListItem.study?.value || ''
    },

    category: {
      id: infojobsListItem.category?.id || null,
      value: infojobsListItem.category?.value || ''
    },

    subcategory: {
      id: infojobsListItem.subcategory?.id || null,
      value: infojobsListItem.subcategory?.value || ''
    },

    link: infojobsListItem.link || null,
    published: infojobsListItem.published || null,
    updated: infojobsListItem.updated || null,

    residence: {
      id: null,
      value: ''
    },

    languages: [], // Not available in list response
    skillsList: [], // Not available in list response

    bold: infojobsListItem.bold || false,
    applications: infojobsListItem.applications || '0',
    executive: infojobsListItem.executive || false,
    salaryDescription: infojobsListItem.salaryDescription || '',
    multiProvince: infojobsListItem.multiProvince || false
  }
}

/**
 * Maps an Infojobs list response to our domain model
 * @param {Object} infojobsListResponse - The response object from Infojobs list API
 * @returns {import('@/domain/offer').JobOffer[]}
 */
export function mapInfojobsListToDomain(infojobsListResponse) {
  if (!infojobsListResponse?.offers || !Array.isArray(infojobsListResponse.offers)) {
    return []
  }

  return infojobsListResponse.offers.map(mapInfojobsListItemToDomain)
}
