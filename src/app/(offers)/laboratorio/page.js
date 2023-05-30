import styles from '@/styles/laboratory.module.css'
import exploreStyles from '@/styles/explore.module.css'
import { InterviewsSection } from '@/components/laboratory/interviewsSection'
import { TechnicalTestsSection } from '@/components/laboratory/technicalTestsSection'
import { ArrowRightIcon, LabsIcon } from '@/components/icons/icons'
import Link from 'next/link'

export default function Laboratory() {
  return (
    <section className={`containerExplore ${exploreStyles.interview} ${styles.laboratory}`}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          Laboratorio
          <LabsIcon size='normal' />
        </h1>
        <p>Con el poder de la IA fortalece tus habilidades haciendo pruebas técnicas o entrevistas simuladas.</p>
      </header>
      <InterviewsSection />
      <hr className='divisorLineBlue' />
      <TechnicalTestsSection />
      <hr className='divisorLineBlue' />
      <section className={styles.discover}>
        <div className={styles.discoverTextContainer}>
          <h3 className={styles.subtitle}>Descubre tu puesto</h3>
          <p className={styles.cardProductDescription}>Completa el cuestionario sobre tus habilidades, capacidades y experiencias para recibir recomendaciones personalizadas y descubrir qué trabajos se adaptan mejor a ti.</p>
        </div>
        <Link
          href='/descubrir-puesto'
          className={`${exploreStyles.btnArrow} ${exploreStyles.blue}`}
        >
          Descubrir
          <ArrowRightIcon size='medium' />
        </Link>
      </section>
    </section>
  )
}
