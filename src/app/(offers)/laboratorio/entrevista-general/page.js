'use client'

import { Interview as InterviewIcon } from '@/components/icons'
import styles from '@/styles/laboratorySegments.module.css'
import labStyles from '@/styles/laboratory.module.css'
import { useState } from 'react'

export default function Interview() {
  const [completed, setCompleted] = useState(0)

  return (
    <section className={`containerExplore ${styles.section}`}>
      <h1 className={labStyles.title}>
        Entrevista General
        <InterviewIcon />
      </h1>
      <div className={styles.steps}>
        {[1, 2, 3, 4, 5, 6].map(p => (
          <div className={`${styles.stepContainer} ${p < completed ? styles.completed : ''}`} key={p}>
            <button className={styles.step} onClick={() => setCompleted(p)}>{p}</button>
          </div>
        ))}
      </div>
    </section>
  )
}
