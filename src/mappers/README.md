# Offer Mappers Architecture

This directory contains the mapping logic for converting job offers from various providers to our unified domain model.

## Structure

```
src/
├── domain/
│   └── offer.js              # Domain model definition (provider-agnostic)
└── mappers/
    ├── index.js              # Main entry point with unified interface
    ├── offerMapper.js        # DEPRECATED - kept for backward compatibility
    └── providers/
        ├── infojobsMapper.js # Infojobs-specific mappings
        └── linkedinMapper.js # LinkedIn-specific mappings (example)
```

## Domain Model

The domain model (`src/domain/offer.js`) defines the canonical structure for job offers in our application. All providers must map their data to this structure.

### Key Principles

1. **Provider Agnostic**: The domain model doesn't depend on any specific provider
2. **Single Source of Truth**: All components use this structure
3. **Type Safety**: JSDoc types for better IDE support
4. **Extensible**: Easy to add new providers without changing existing code

## Usage

### Recommended (New Way)

```javascript
import { mapOfferDetailToDomain, mapOfferListToDomain, PROVIDERS } from '@/mappers'

// Map a single offer detail
const offer = mapOfferDetailToDomain(infojobsResponse, PROVIDERS.INFOJOBS)

// Map a list of offers
const offers = mapOfferListToDomain(infojobsListResponse, PROVIDERS.INFOJOBS)
```

### Provider-Specific (When you need more control)

```javascript
import { mapInfojobsDetailToDomain, mapInfojobsListToDomain } from '@/mappers/providers/infojobsMapper'

const offer = mapInfojobsDetailToDomain(infojobsResponse)
const offers = mapInfojobsListToDomain(infojobsListResponse)
```

### Backward Compatibility (Old Way - Deprecated)

```javascript
import { mapInfojobsOfferToDomain, mapInfojobsOfferListToDomain } from '@/mappers/offerMapper'

// Still works but deprecated
const offer = mapInfojobsOfferToDomain(infojobsResponse)
```

## Adding a New Provider

To add support for a new job provider (e.g., Indeed, Monster, etc.):

### 1. Create a new mapper file

Create `src/mappers/providers/yourProviderMapper.js`:

```javascript
/**
 * Maps YourProvider job detail to our domain model
 * @param {Object} providerJob - The job from YourProvider API
 * @returns {import('@/domain/offer').JobOffer|null}
 */
export function mapYourProviderDetailToDomain(providerJob) {
  if (!providerJob) return null

  return {
    id: providerJob.jobId,
    title: providerJob.jobTitle,
    description: providerJob.fullDescription,
    requirementMin: providerJob.requirements,
    
    author: {
      id: providerJob.employer.id,
      name: providerJob.employer.name,
      logoUrl: providerJob.employer.logo,
      uri: providerJob.employer.website
    },
    
    // ... map all other fields to match domain model
    
    city: providerJob.location.city,
    province: {
      id: null,
      value: providerJob.location.state
    },
    
    // Continue mapping all required fields...
  }
}

export function mapYourProviderListToDomain(response) {
  if (!response?.results) return []
  return response.results.map(mapYourProviderDetailToDomain)
}
```

### 2. Update the main mapper

Add your provider to `src/mappers/index.js`:

```javascript
import { mapYourProviderDetailToDomain, mapYourProviderListToDomain } from './providers/yourProviderMapper'

export const PROVIDERS = {
  INFOJOBS: 'infojobs',
  YOUR_PROVIDER: 'yourprovider',
}

export function mapOfferDetailToDomain(offer, provider = PROVIDERS.INFOJOBS) {
  switch (provider) {
    case PROVIDERS.INFOJOBS:
      return mapInfojobsDetailToDomain(offer)
    case PROVIDERS.YOUR_PROVIDER:
      return mapYourProviderDetailToDomain(offer)
    default:
      // ...
  }
}
```

### 3. Use it in your services

```javascript
import { mapOfferListToDomain, PROVIDERS } from '@/mappers'

export async function getYourProviderOffers(filters) {
  const response = await fetchFromYourProvider(filters)
  return mapOfferListToDomain(response, PROVIDERS.YOUR_PROVIDER)
}
```

## Benefits

- **Maintainability**: Changes to provider APIs only affect their specific mapper
- **Testability**: Easy to test each mapper independently
- **Flexibility**: Switch providers without changing component code
- **Consistency**: All components work with the same data structure
- **Scalability**: Add new providers without modifying existing code

## Migration Guide

If you're using the old `offerMapper.js` imports:

**Before:**
```javascript
import { mapInfojobsOfferToDomain } from '@/mappers/offerMapper'
```

**After:**
```javascript
import { mapOfferDetailToDomain, PROVIDERS } from '@/mappers'
// or
import { mapInfojobsDetailToDomain } from '@/mappers/providers/infojobsMapper'
```

The old imports still work but are deprecated and will be removed in a future version.
