import styles from '@/styles/laboratorySegments.module.css'
import labStyles from '@/styles/laboratory.module.css'
import exploreStyles from '@/styles/explore.module.css'
import { BackEndIcon } from '@/components/technicalProfileIcons'
import { BtnArrow } from '@/components/btnArrow'
import { CardOfferSelect } from '@/components/cardOfferSelect'
import { ScienceIcon } from '@/components/icons/icons'

export default function TechnicalTest() {
  return (
    <section className={`containerExplore ${labStyles.technicalTest} ${labStyles.laboratory}`}>
      <header className={labStyles.header}>
        <h1 className={labStyles.title}>
          Prueba Técnica
          <ScienceIcon size='normal' />
        </h1>
        <p className={styles.puestoContainer}>
          Puesto:
          <span href='/explorar/asdf' className={styles.puestoName}>
            Desarrollador Back End
            <BackEndIcon />
          </span>
        </p>
      </header>

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
    </section>
  )
}
