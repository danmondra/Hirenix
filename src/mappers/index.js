/**
 * Main mapper entry point
 * Provides a unified interface for mapping offers from any provider to our domain model
 */

import { mapInfojobsDetailToDomain, mapInfojobsListToDomain } from './providers/infojobsMapper'

/**
 * Supported job offer providers
 */
export const PROVIDERS = {
  INFOJOBS: 'infojobs'
  // Add more providers here as needed
  // LINKEDIN: 'linkedin',
  // INDEED: 'indeed'
}

/**
 * Maps a single offer detail from any provider to our domain model
 * @param {Object} offer - The offer object from the provider API
 * @param {string} provider - The provider name (use PROVIDERS constant)
 * @returns {import('@/domain/offer').JobOffer|null}
 */
export function mapOfferDetailToDomain(offer, provider = PROVIDERS.INFOJOBS) {
  switch (provider) {
    case PROVIDERS.INFOJOBS:
      return mapInfojobsDetailToDomain(offer)

      // Add more providers here
      // case PROVIDERS.LINKEDIN:
      //   return mapLinkedInDetailToDomain(offer)

    default:
      console.warn(`Unknown provider: ${provider}. Defaulting to Infojobs mapper.`)
      return mapInfojobsDetailToDomain(offer)
  }
}

/**
 * Maps a list of offers from any provider to our domain model
 * @param {Object} response - The list response object from the provider API
 * @param {string} provider - The provider name (use PROVIDERS constant)
 * @returns {import('@/domain/offer').JobOffer[]}
 */
export function mapOfferListToDomain(response, provider = PROVIDERS.INFOJOBS) {
  switch (provider) {
    case PROVIDERS.INFOJOBS:
      return mapInfojobsListToDomain(response)

      // Add more providers here
      // case PROVIDERS.LINKEDIN:
      //   return mapLinkedInListToDomain(response)

    default:
      console.warn(`Unknown provider: ${provider}. Defaulting to Infojobs mapper.`)
      return mapInfojobsListToDomain(response)
  }
}

// Re-export for backward compatibility
export { mapInfojobsDetailToDomain, mapInfojobsListToDomain }
