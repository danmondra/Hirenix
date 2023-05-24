import offerStyles from '@/styles/offer.module.css'
import { OfferCharacteristic } from '@/components/offer/offerCharacteristic'
import { SalaryIcon, ExperienceIcon, ModalityIcon, LocationIcon, WorkdayIcon, TimeIcon } from '@/components/icons/icons'

export function CardOfferCharacteristics() {
  return (
    <div className={offerStyles.characteristicsGroup}>
      <OfferCharacteristic
        icon={<LocationIcon size='small' />}
      >
        Madrid, España
      </OfferCharacteristic>
      <OfferCharacteristic
        icon={<SalaryIcon size='small' />}
      >
        900€ - 1.800€
      </OfferCharacteristic>
      <OfferCharacteristic
        icon={<ExperienceIcon size='small' />}
      >
        Sin experiencia
      </OfferCharacteristic>
      <OfferCharacteristic
        icon={<ModalityIcon size='small' />}
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
        icon={<SalaryIcon size='small' />}
      >
        900€ - 1.800€
      </OfferCharacteristic>
      <OfferCharacteristic
        icon={<ExperienceIcon size='small' />}
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
        icon={<LocationIcon size='small' />}
      >
        Madrid, España
      </OfferCharacteristic>
      <OfferCharacteristic
        icon={<SalaryIcon size='small' />}
      >
        900€ - 1.800€
      </OfferCharacteristic>
      <OfferCharacteristic
        icon={<ExperienceIcon size='small' />}
      >
        Sin experiencia
      </OfferCharacteristic>
      <OfferCharacteristic
        icon={<ModalityIcon size='small' />}
      >
        Solo Teletrabajo
      </OfferCharacteristic>
      <OfferCharacteristic
        icon={<WorkdayIcon size='small' />}
      >
        Indefinido, jornada completa
      </OfferCharacteristic>
      <OfferCharacteristic
        icon={<TimeIcon size='small' />}
      >
        Publicada hace 5d (Publicada de nuevo)
      </OfferCharacteristic>
    </div>
  )
}
