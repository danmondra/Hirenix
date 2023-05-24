import { Salary, Experience, Modality, Location, Workday, Time } from '@/components/icons'
import offerStyles from '@/styles/offer.module.css'
import { OfferCharacteristic } from '@/components/offerCharacteristic'

export function CardOfferCharacteristics() {
  return (
    <div className={offerStyles.characteristicsGroup}>
      <OfferCharacteristic
        icon={<Location size='small' />}
      >
        Madrid, España
      </OfferCharacteristic>
      <OfferCharacteristic
        icon={<Salary size='small' />}
      >
        900€ - 1.800€
      </OfferCharacteristic>
      <OfferCharacteristic
        icon={<Experience size='small' />}
      >
        Sin experiencia
      </OfferCharacteristic>
      <OfferCharacteristic
        icon={<Modality size='small' />}
      >
        Solo Teletrabajo
      </OfferCharacteristic>
    </div>
  )
}

export function CardOfferSelectCharacteristics() {
  return (
    <div className={offerStyles.characteristicsGroup}>
      <OfferCharacteristic
        icon={<Salary size='small' />}
      >
        900€ - 1.800€
      </OfferCharacteristic>
      <OfferCharacteristic
        icon={<Experience size='small' />}
      >
        Sin experiencia
      </OfferCharacteristic>
    </div>
  )
}

export function OfferCharacteristics() {
  return (
    <div className={offerStyles.characteristicsGroup}>
      <OfferCharacteristic
        icon={<Location size='small' />}
      >
        Madrid, España
      </OfferCharacteristic>
      <OfferCharacteristic
        icon={<Salary size='small' />}
      >
        900€ - 1.800€
      </OfferCharacteristic>
      <OfferCharacteristic
        icon={<Experience size='small' />}
      >
        Sin experiencia
      </OfferCharacteristic>
      <OfferCharacteristic
        icon={<Modality size='small' />}
      >
        Solo Teletrabajo
      </OfferCharacteristic>
      <OfferCharacteristic
        icon={<Workday size='small' />}
      >
        Indefinido, jornada completa
      </OfferCharacteristic>
      <OfferCharacteristic
        icon={<Time size='small' />}
      >
        Publicada hace 5d (Publicada de nuevo)
      </OfferCharacteristic>
    </div>
  )
}
