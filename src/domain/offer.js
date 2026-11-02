/**
 * Domain model for job offers
 * This represents the canonical structure used throughout the application,
 * independent of any external provider (Infojobs, LinkedIn, etc.)
 */

/**
 * @typedef {Object} OfferAuthor
 * @property {string|null} id - Unique identifier of the company
 * @property {string} name - Company name
 * @property {string|null} logoUrl - URL to company logo
 * @property {string|null} uri - Company profile URL
 */

/**
 * @typedef {Object} OfferLocation
 * @property {number|null} id - Location identifier
 * @property {string} value - Location name
 */

/**
 * @typedef {Object} OfferSalary
 * @property {number|null} id - Salary range identifier
 * @property {string|number|null} value - Salary amount
 */

/**
 * @typedef {Object} OfferAttribute
 * @property {number|null} id - Attribute identifier
 * @property {string} value - Attribute value
 */

/**
 * @typedef {Object} OfferLanguage
 * @property {string} name - Language name
 * @property {string} level - Proficiency level
 */

/**
 * @typedef {Object} OfferSkill
 * @property {string} skill - Skill name
 */

/**
 * @typedef {Object} JobOffer
 * @property {string} id - Unique offer identifier
 * @property {string} title - Job title
 * @property {string} description - Full job description
 * @property {string} requirementMin - Minimum requirements summary
 * @property {OfferAuthor} author - Company/author information
 * @property {string} city - City location
 * @property {OfferLocation} province - Province/state information
 * @property {OfferSalary} salaryMin - Minimum salary
 * @property {OfferSalary} salaryMax - Maximum salary
 * @property {OfferAttribute} salaryPeriod - Salary period (hourly, monthly, yearly)
 * @property {OfferAttribute} experienceMin - Minimum experience required
 * @property {OfferAttribute} teleworking - Remote work policy
 * @property {OfferAttribute} contractType - Type of contract
 * @property {OfferAttribute} workDay - Work schedule/journey
 * @property {OfferAttribute} study - Education level required
 * @property {OfferAttribute|null} category - Job category
 * @property {OfferAttribute|null} subcategory - Job subcategory
 * @property {string|null} link - Direct link to offer
 * @property {string|null} published - Publication date (ISO string)
 * @property {string|null} updated - Last update date (ISO string)
 * @property {OfferAttribute|null} residence - Residence requirements
 * @property {OfferLanguage[]} languages - Required languages
 * @property {OfferSkill[]} skillsList - Required skills
 * @property {boolean} bold - Whether offer is highlighted
 * @property {string} applications - Number of applications
 * @property {boolean} executive - Whether it's an executive position
 * @property {string} salaryDescription - Human-readable salary description
 * @property {boolean} multiProvince - Whether offer spans multiple provinces
 */

/**
 * Creates an empty job offer with default values
 * @returns {JobOffer}
 */
export function createEmptyOffer() {
  return {
    id: null,
    title: '',
    description: '',
    requirementMin: '',
    author: {
      id: null,
      name: '',
      logoUrl: null,
      uri: null
    },
    city: '',
    province: {
      id: null,
      value: ''
    },
    salaryMin: {
      id: null,
      value: null
    },
    salaryMax: {
      id: null,
      value: null
    },
    salaryPeriod: {
      id: null,
      value: ''
    },
    experienceMin: {
      id: null,
      value: ''
    },
    teleworking: {
      id: null,
      value: ''
    },
    contractType: {
      id: null,
      value: ''
    },
    workDay: {
      id: null,
      value: ''
    },
    study: {
      id: null,
      value: ''
    },
    category: {
      id: null,
      value: ''
    },
    subcategory: {
      id: null,
      value: ''
    },
    link: null,
    published: null,
    updated: null,
    residence: {
      id: null,
      value: ''
    },
    languages: [],
    skillsList: [],
    bold: false,
    applications: '0',
    executive: false,
    salaryDescription: '',
    multiProvince: false
  }
}
