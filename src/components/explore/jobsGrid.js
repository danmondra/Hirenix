import Link from 'next/link'
import styles from '@/styles/jobsGrid.module.css'
import {
  DeveloperIcon,
  DesignerIcon,
  EngineerIcon,
  ConstructionIcon,
  ManagementIcon,
  LegalIcon,
  SupportIcon,
  HealthIcon,
  ManufacturingIcon,
  AccountantIcon,
  MechanicalIcon,
  EducationIcon,
  AllJobsIcon
} from '@/components/icons/jobIcons.js'

export function JobsGrid({ length }) {
  const jobs = [
    {
      name: 'Desarrollo',
      icon: <DeveloperIcon />
    },
    {
      name: 'Diseño',
      icon: <DesignerIcon />
    },
    {
      name: 'Ingeniería',
      icon: <EngineerIcon />
    },
    {
      name: 'Construcción',
      icon: <ConstructionIcon />
    },
    {
      name: 'Administración',
      icon: <ManagementIcon />
    },
    {
      name: 'Servicios Legales',
      icon: <LegalIcon />
    },
    {
      name: 'Soporte al cliente',
      icon: <SupportIcon />
    },
    {
      name: 'Sanidad y salud',
      icon: <HealthIcon />
    },
    {
      name: 'Calidad y producción',
      icon: <ManufacturingIcon />
    },
    {
      name: 'Contabilidad y finanzas',
      icon: <AccountantIcon />
    },
    {
      name: 'Mecánica',
      icon: <MechanicalIcon />
    },
    {
      name: 'Educación',
      icon: <EducationIcon />
    }
  ]

  return (
    <section className={`${styles.searchByJobs} ${length && styles.landing}`}>
      <h3 className={styles.title}>Busca empleos en tu campo:</h3>
      <div className={styles.jobsGrid}>
        {jobs.splice(0, length || jobs.length).map(({ icon, name }) => (
          <Link
            key={name}
            href='/'
            className={styles.job}
          >
            {icon}
            {name}
          </Link>
        ))}

        {
          length &&
            <Link
              href='/'
              className={styles.job}
            >
              <AllJobsIcon />
              Todos
            </Link>
        }
      </div>
    </section>
  )
}
