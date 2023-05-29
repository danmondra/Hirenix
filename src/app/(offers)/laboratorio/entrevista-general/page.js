'use client'

import { useEffect, useState } from 'react'
import styles from '@/styles/laboratorySegments.module.css'
import labStyles from '@/styles/laboratory.module.css'
import { StepsBar } from '@/components/laboratory/stepsBar'
import { AnswersForm } from '@/components/laboratory/answersForm'
import { InterviewIcon } from '@/components/icons/icons'
import { generalInterview } from '@/consts/generalInterview'

export default function Interview() {
  const [fullInterview, setFullInterview] = useState(generalInterview)
  const [actualQuestion, setActualQuestion] = useState(fullInterview[0])
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const deadline = 'December, 31, 2023'

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now()
    console.log(minutes)

    setMinutes(Math.floor((time / 1000 / 60) % 60))
    setSeconds(Math.floor((time / 1000) % 60))
  }

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className={`containerExplore ${styles.section}`}>
      <div className={styles.titleContainer}>
        <h1 className={labStyles.title}>
          Entrevista General
          <InterviewIcon />
        </h1>
        <p className={styles.time}>Tiempo Restante: <span>{minutes}</span></p>
      </div>
      <StepsBar interview={fullInterview} actualQuestion={actualQuestion} setQuestion={setActualQuestion} setFullInterview={setFullInterview} />
      <AnswersForm
        interview={fullInterview}
        actualQuestion={actualQuestion}
        setActualQuestion={setActualQuestion}
      />
    </section>
  )
}
