import styles from '@/styles/laboratory.module.css'
import Link from 'next/link'
import exploreStyles from '@/styles/explore.module.css'
import { SearchAside } from '@/components/searchAside'
import { AllJobs } from '@/components/jobIcons'
import { Science } from '@/components/icons'
import { technicalRoles } from '@/consts/technicalRoles'

export function TechnicalTestsSection() {
  return (
    <section className={`${exploreStyles.technicalTest} ${styles.interview}`}>
      <div className={styles.subtitleContainer}>
        <h2 className={styles.subtitle}>
          Pruebas Técnicas
          <Science size='medium' />
        </h2>
        <p className=''>Elige el rol:</p>
      </div>
      <div className={styles.rolesGrid}>
        {technicalRoles.map(({ id, name, key, icon }) => (
          <Link href={`/${key}`} className={styles.role} key={id}>
            {icon}
            <p className={styles.roleName}>
              {name}
            </p>
          </Link>
        ))}
        <article className={styles.role}>
          <AllJobs />
          <div>
            <p className={styles.roleName}>
              Otro Rol
            </p>
            <SearchAside />
          </div>
        </article>
      </div>
    </section>
  )
}
