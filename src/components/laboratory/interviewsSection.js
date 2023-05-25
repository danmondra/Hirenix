import Link from 'next/link'
import styles from '@/styles/laboratory.module.css'
import { SearchAside } from '@/components/layout/searchAside'
import { InterviewIcon } from '@/components/icons/icons'

export function InterviewsSection() {
  return (
    <section className={styles.interview}>
      <h2 className={styles.subtitle}>
        Entrevistas Simuladas
        <InterviewIcon size='medium' />
      </h2>
      <Link href='/laboratorio/entrevista-general' className={styles.cardProductOption}>
        <h3 className={styles.cardProductTitle}>
          Entrevista General
        </h3>
        <p className={styles.cardProductDescription}>
          Evalúa tus competencias básicas y tu idoneidad para un puesto general. Se te harán preguntas sobre tu experiencia laboral previa, habilidades generales, personalidad y capacidad de comunicación.
        </p>
      </Link>
      <article className={styles.cardProductOption}>
        <h3 className={styles.cardProductTitle}>
          Entrevista de un puesto específico
        </h3>
        <p className={styles.cardProductDescription}>
          Evalúa tus competencias básicas y tu idoneidad para un puesto específico.
          Busca el puesto:
        </p>
        <SearchAside />
      </article>
    </section>
  )
}
