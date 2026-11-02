/**
 * DEPRECATED: This file is kept for backward compatibility
 * Please use the new mapper structure:
 * - import { mapOfferDetailToDomain, mapOfferListToDomain } from '@/mappers'
 * - Or provider-specific: import { mapInfojobsDetailToDomain } from '@/mappers/providers/infojobsMapper'
 */

import {
  mapInfojobsDetailToDomain,
  mapInfojobsListToDomain
} from './providers/infojobsMapper'

// Backward compatibility exports
export { mapInfojobsDetailToDomain, mapInfojobsListToDomain }

export function mapInfojobsOfferDetailToDomain(infojobsOffer) {
  return mapInfojobsDetailToDomain(infojobsOffer)
}

export function mapInfojobsOfferToDomain(infojobsOffer) {
  return mapInfojobsDetailToDomain(infojobsOffer)
}

export function mapInfojobsOfferListToDomain(infojobsListResponse) {
  return mapInfojobsListToDomain(infojobsListResponse)
}
