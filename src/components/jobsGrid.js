import Link from 'next/link'
import styles from '@/styles/jobsGrid.module.css'
import {
  Developer,
  Designer,
  Engineer,
  Construction,
  Management,
  Legal,
  Support,
  Health,
  Manufacturing,
  Accountant,
  Mechanical,
  Education,
  AllJobs
} from '@/components/jobIcons.js'

export function JobsGrid({ length }) {
  const jobs = [
    {
      name: 'Desarrollo',
      icon: <Developer />
    },
    {
      name: 'Diseño',
      icon: <Designer />
    },
    {
      name: 'Ingeniería',
      icon: <Engineer />
    },
    {
      name: 'Construcción',
      icon: <Construction />
    },
    {
      name: 'Administración',
      icon: <Management />
    },
    {
      name: 'Servicios Legales',
      icon: <Legal />
    },
    {
      name: 'Soporte al cliente',
      icon: <Support />
    },
    {
      name: 'Sanidad y salud',
      icon: <Health />
    },
    {
      name: 'Calidad y producción',
      icon: <Manufacturing />
    },
    {
      name: 'Contabilidad y finanzas',
      icon: <Accountant />
    },
    {
      name: 'Mecánica',
      icon: <Mechanical />
    },
    {
      name: 'Educación',
      icon: <Education />
    }
  ]

  return (
    <section className={styles.searchByJobs}>
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
              <AllJobs />
              Todos
            </Link>
        }
      </div>
    </section>
  )
}
