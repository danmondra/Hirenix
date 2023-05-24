import Link from 'next/link'
import styles from '@/styles/landingPage.module.css'
import { JobsGrid } from '@/components/jobsGrid'
import { JobExampleLanding } from '@/components/landing/jobExampleLanding'
import { MainLink } from '@/components/landing/mainLink'

export function MainSectionLanding() {
  return (
    <main className={styles.main}>
      <div className={`container ${styles.content}`}>
        <div className={styles.info}>
          <h1 className={styles.title}>Una <span>nueva era</span> en la busqueda de <span>empleo y talento</span></h1>
          <p className={styles.text}>Impulsada por <Link href='https://infojobs.net'>Infojobs</Link> y potenciada por Inteligencia Artificial</p>
          <div className={styles.btnsContainer}>
            <MainLink />
            <Link href='/reclutar' className={styles.btnTalento}>Buscar talento</Link>
          </div>
          <JobsGrid
            length={5}
          />
        </div>
        <section className={styles.jobExamples}>
          <JobExampleLanding />
          <JobExampleLanding />
        </section>
      </div>
    </main>
  )
}
