'use client'

import { useState } from 'react'
import styles from '@/styles/laboratorySegments.module.css'
import labStyles from '@/styles/laboratory.module.css'
import { StepsBar } from '@/components/setpsBar'
import { generalInterview } from '@/consts/generalInterview'
import { AnswersForm } from '@/components/answersForm'
import { InterviewIcon } from '@/components/icons/icons'

export default function Interview() {
  const [fullInterview, setFullInterview] = useState(generalInterview)
  const [actualQuestion, setActualQuestion] = useState(fullInterview[0])

  return (
    <section className={`containerExplore ${styles.section}`}>
      <div className={styles.titleContainer}>
        <h1 className={labStyles.title}>
          Entrevista General
          <InterviewIcon />
        </h1>
        <p className={styles.time}>Tiempo Restante: <span>23:20</span></p>
      </div>
      <StepsBar interview={fullInterview} actualQuestion={actualQuestion} setQuestion={setActualQuestion} />
      <AnswersForm
        interview={fullInterview}
        actualQuestion={actualQuestion}
        setActualQuestion={setActualQuestion}
      />
    </section>
  )
}
