import Link from 'next/link'
import styles from '@/styles/laboratory.module.css'
import exploreStyles from '@/styles/explore.module.css'
import { SearchAside } from '@/components/layout/searchAside'
import { AllJobsIcon } from '@/components/icons/jobIcons'
import { technicalRoles } from '@/consts/technicalRoles'
import { ScienceIcon } from '@/components/icons/icons'

export function TechnicalTestsSection() {
  return (
    <section className={`${exploreStyles.technicalTest} ${styles.interview}`}>
      <div className={styles.subtitleContainer}>
        <h2 className={styles.subtitle}>
          Pruebas Técnicas
          <ScienceIcon size='medium' />
        </h2>
        <p className=''>Elige el rol:</p>
      </div>
      <div className={styles.rolesGrid}>
        {technicalRoles.map(({ id, name, icon }) => (
          <Link href={`/search?q=${name}&select=true&to=prueba-tecnica`} className={styles.role} key={id}>
            {icon}
            <p className={styles.roleName}>
              {name}
            </p>
          </Link>
        ))}
        <article className={styles.role}>
          <AllJobsIcon />
          <div>
            <p className={styles.roleName}>
              Otro Rol
            </p>
            <SearchAside select to='prueba-tecnica' />
          </div>
        </article>
      </div>
    </section>
  )
}
