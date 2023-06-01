import { useEffect, useState } from 'react'
import styles from '@/styles/laboratorySegments.module.css'
import { EmptyUnloggedGreen, InterviewImage } from '../icons/infojobsImages'
import { sabiasQue } from '@/consts/sabiasQue'

export function SabiasQue({ type }) {
  const [actualSabiasQue, setActualSabiasQue] = useState(null)

  const types = {
    interview: {
      name: 'Entrevista',
      image: <InterviewImage />
    },
    technicalTest: {
      name: 'Prueba Técnica',
      image: <EmptyUnloggedGreen />
    }
  }

  const randomNumber = parseInt(Math.random() * sabiasQue.length - 1)

  const timeout = setTimeout(() => {
    if(actualSabiasQue === sabiasQue.length - 1) {
      setActualSabiasQue(0)
      return
    }

    setActualSabiasQue(randomNumber)
  }, 6000)

  useEffect(() => {
    setActualSabiasQue(randomNumber)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section className={styles.loading}>
      {types[type].image}
      <div>
        <h3>Mientras creamos la {types[type].name}</h3>
        <h3 className={styles.sabiasQue}>¿Sabías Que...?</h3>
        <p>{sabiasQue[actualSabiasQue] ?? ''}</p>
      </div>
    </section>
  )
}
