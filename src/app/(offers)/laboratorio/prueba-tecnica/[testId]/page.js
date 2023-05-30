import styles from '@/styles/laboratorySegments.module.css'
import labStyles from '@/styles/laboratory.module.css'
import exploreStyles from '@/styles/explore.module.css'
import { BtnArrow } from '@/components/btnArrow'
import { CardOfferSelect } from '@/components/offer/card/cardOfferSelect'
import { ScienceIcon } from '@/components/icons/icons'
import { TechincalTestQuestions } from '@/components/laboratory/technicalTestQuestions'
import { getOfferById } from '@/services/getOffers'
import Link from 'next/link'

export default async function TechnicalTest({ params }) {
  const { testId } = params

  // TODO --- Check if there is a test
  const testsGenerated = []

  return (
    <section className={`containerExplore ${labStyles.technicalTest} ${labStyles.laboratory} ${styles.techincalTest}`}>
      <header className={labStyles.header}>
        <h1 className={labStyles.title}>
          Prueba Técnica
          <ScienceIcon size='normal' />
        </h1>
        <OfferName offerId={testId} />
      </header>
      {
        testsGenerated?.length
          ? <OtherTests />
          : <TechincalTestQuestions offerId={testId} />
      }
    </section>
  )
}

export function OtherTests() {
  return (
    <>
      <section className={labStyles.discover}>
        <div className={labStyles.discoverTextContainer}>
          <h3 className={labStyles.subtitle}>Nueva Prueba</h3>
          <p className={labStyles.cardProductDescription}>Genera una nueva prueba técnica para un puesto de Desarrollador Back End, esta se almacenará y estará disponible para todos los usuarios.</p>
        </div>
        <BtnArrow
          color='blue'
        >
          Generar
        </BtnArrow>
      </section>

      <hr className='divisorLineBlue' />

      <section>
        <h2 className={exploreStyles.offersSectionTitle}>Ofertas creadas por otros usuarios</h2>
        <CardOfferSelect />
      </section>
    </>
  )
}

export async function OfferName({ offerId }) {
  const offer = await getOfferById(offerId)

  return (
    <p className={styles.puestoContainer}>
      Puesto:
      <Link href={`/explorar/${offer?.id}`} className={styles.puestoName} target='_blank'>
        {offer?.title}
      </Link>
    </p>
  )
}
