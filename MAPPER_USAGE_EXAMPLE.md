# Mapper Usage Examples

## Quick Start

Here's how to use the new domain-driven mapper architecture in your components:

### Example 1: Using in CardListOffer Component

**Before (tightly coupled to Infojobs):**
```javascript
import offersMock from '@/mocks/offerResponse.json'

export async function CardListOffer({ filters = { maxResults: 10 } }) {
  const offerList = offersMock.offers // Direct use of Infojobs structure
  // ...
}
```

**After (provider-agnostic):**
```javascript
import offersMock from '@/mocks/offerResponse.json'
import { mapOfferListToDomain, PROVIDERS } from '@/mappers'

export async function CardListOffer({ filters = { maxResults: 10 } }) {
  // Map to domain model - now you can easily switch providers
  const offerList = mapOfferListToDomain(offersMock, PROVIDERS.INFOJOBS)
  // ...
}
```

### Example 2: Using in Services

**src/services/getOffers.js:**
```javascript
import { mapOfferListToDomain, PROVIDERS } from '@/mappers'

export async function getInfojobsOffers(filters) {
  const response = await fetch('/api/infojobs/offers', {
    method: 'POST',
    body: JSON.stringify(filters)
  })

  const data = await response.json()

  // Map to domain model
  return mapOfferListToDomain(data, PROVIDERS.INFOJOBS)
}

export async function getOfferDetail(offerId, provider = PROVIDERS.INFOJOBS) {
  const response = await fetch(`/api/${provider}/offers/${offerId}`)
  const data = await response.json()

  // Map to domain model
  return mapOfferDetailToDomain(data, provider)
}
```

### Example 3: Switching Providers

The beauty of this architecture is that you can easily switch providers:

```javascript
import { mapOfferListToDomain, PROVIDERS } from '@/mappers'

// Get offers from Infojobs
const infojobsOffers = mapOfferListToDomain(infojobsResponse, PROVIDERS.INFOJOBS)

// Get offers from LinkedIn (when implemented)
const linkedinOffers = mapOfferListToDomain(linkedinResponse, PROVIDERS.LINKEDIN)

// Combine offers from multiple providers
const allOffers = [...infojobsOffers, ...linkedinOffers]

// All offers now have the same structure!
```

### Example 4: Type Safety with JSDoc

```javascript
/**
 * @param {import('@/domain/offer').JobOffer} offer
 */
function displayOffer(offer) {
  // Your IDE will now provide autocomplete for all offer properties
  console.log(offer.title)
  console.log(offer.author.name)
  console.log(offer.salaryMin.value)
}
```

## Migration Path

### Step 1: Update your imports
```javascript
// Old
import { mapInfojobsOfferListToDomain } from '@/mappers/offerMapper'

// New
import { mapOfferListToDomain, PROVIDERS } from '@/mappers'
```

### Step 2: Update your function calls
```javascript
// Old
const offers = mapInfojobsOfferListToDomain(response)

// New
const offers = mapOfferListToDomain(response, PROVIDERS.INFOJOBS)
```

### Step 3: Enjoy provider flexibility!
Now you can easily add LinkedIn, Indeed, or any other provider without changing your component code.

## Benefits

1. **Provider Independence**: Components don't care where data comes from
2. **Easy Testing**: Mock the domain model, not provider-specific structures
3. **Scalability**: Add new providers without touching existing code
4. **Type Safety**: Single source of truth for data structure
5. **Maintainability**: Provider changes only affect their mapper
