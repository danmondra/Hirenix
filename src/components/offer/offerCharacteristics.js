import styles from '@/styles/offer.module.css'
import { OfferCharacteristic } from '@/components/offer/offerCharacteristic'
import {
  SalaryIcon,
  ExperienceIcon,
  ModalityIcon,
  LocationIcon,
  WorkdayIcon,
  TimeIcon,
  LanguageIcon,
  ResidenceIcon,
  StudyIcon
} from '@/components/icons/icons'
import { timeSincePublication } from '@/utils/dateUtils'

export function CardOfferCharacteristics({ offer }) {
  const { city, province, salaryMin, salaryMax, salaryPeriod, experienceMin, teleworking } = offer

  return (
    <div className={styles.characteristicsGroup}>
      <OfferCharacteristic
        icon={<LocationIcon size='small' />}
      >
        {`${city}, ${province?.value}`}
      </OfferCharacteristic>
      <OfferCharacteristic
        icon={<SalaryIcon size='small' />}
      >
        {salaryMin?.value && salaryMax?.value ? `${salaryMin?.value} - ${salaryMax?.value} ${salaryPeriod?.value}` : 'No específicado'}
      </OfferCharacteristic>
      <OfferCharacteristic
        icon={<ExperienceIcon size='small' />}
      >
        {experienceMin?.value}
      </OfferCharacteristic>
      <OfferCharacteristic
        icon={<ModalityIcon size='small' />}
      >
        {teleworking?.value}
      </OfferCharacteristic>
    </div>
  )
}

export function CardOfferSelectCharacteristics({ offer }) {
  const { salaryMin, salaryMax, salaryPeriod, experienceMin } = offer

  return (
    <div className={styles.characteristicsGroup}>
      <OfferCharacteristic
        icon={<SalaryIcon size='small' />}
      >
        {salaryMin?.value && salaryMax?.value ? `${salaryMin?.value} - ${salaryMax?.value} ${salaryPeriod?.value}` : 'No específicado'}
      </OfferCharacteristic>
      <OfferCharacteristic
        icon={<ExperienceIcon size='small' />}
      >
        {experienceMin?.value}
      </OfferCharacteristic>
    </div>
  )
}

export function OfferCharacteristics({ offer }) {
  const { city, province, minPay, maxPay, experienceMin, teleworking, contractType, journey, creationDate } = offer

  return (
    <div className={styles.characteristicsGroup}>
      <OfferCharacteristic
        icon={<LocationIcon size='small' />}
      >
        {city}, {province?.value}
      </OfferCharacteristic>
      <OfferCharacteristic
        icon={<SalaryIcon size='small' />}
      >
        {minPay?.amountValue && maxPay?.amountValue ? `${minPay?.amountValue} - ${maxPay?.amountValue} ${maxPay?.periodValue}` : 'No específicado'}
      </OfferCharacteristic>
      <OfferCharacteristic
        icon={<ExperienceIcon size='small' />}
      >
        {experienceMin?.value}
      </OfferCharacteristic>
      <OfferCharacteristic
        icon={<ModalityIcon size='small' />}
      >
        {teleworking?.value}
      </OfferCharacteristic>
      <OfferCharacteristic
        icon={<WorkdayIcon size='small' />}
      >
        {contractType?.value}, Jornada {journey?.value}
      </OfferCharacteristic>
      <OfferCharacteristic
        icon={<TimeIcon size='small' />}
      >
        Publicada <span>hace {timeSincePublication(creationDate)}</span>
      </OfferCharacteristic>
    </div>
  )
}

export function OfferCharacteristicsRequirements({ offer }) {
  const { experienceMin, residence, languages, studiesMin } = offer

  const formatedLanguages = languages?.map(({ name, level }) => `${name} - ${level}`).join(', ')

  return (
    <div className={styles.characteristicsGroup}>
      {
        experienceMin?.value &&
          <OfferCharacteristic
            icon={<ExperienceIcon size='small' />}
          >
            {experienceMin?.value}
          </OfferCharacteristic>
      }
      {
        languages.length !== 0 &&
          <OfferCharacteristic
            icon={<LanguageIcon size='small' />}
          >
            {formatedLanguages}
          </OfferCharacteristic>
      }
      {
        residence?.value && residence?.value !== '(Seleccionar)' &&
          <OfferCharacteristic
            icon={<ResidenceIcon size='small' />}
          >
            {residence?.value}
          </OfferCharacteristic>
      }
      {
        studiesMin?.value &&
          <OfferCharacteristic
            icon={<StudyIcon size='small' />}
          >
            {studiesMin?.value}
          </OfferCharacteristic>
      }
    </div>
  )
}
