import { useEffect, useState } from 'react'
import styles from '@/styles/laboratorySegments.module.css'
import { EmptyUnloggedGreen } from '../icons/infojobsImages'
import { sabiasQue } from '@/consts/sabiasQue'

export function SabiasQue() {
  const [actualSabiasQue, setActualSabiasQue] = useState(0)

  const timeout = setTimeout(() => {
    if(actualSabiasQue === sabiasQue.length - 1) {
      setActualSabiasQue(0)
      return
    }
    const randomNumber = parseInt(Math.random() * sabiasQue.length - 1)

    setActualSabiasQue(randomNumber)
  }, 6000)

  useEffect(() => {
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section className={styles.loading}>
      <EmptyUnloggedGreen />
      <div>
        <h3>Mientras creamos la Prueba Técnica</h3>
        <h3 className={styles.sabiasQue}>¿Sabías Que...?</h3>
        <p>{sabiasQue[actualSabiasQue]}</p>
      </div>
    </section>
  )
}
