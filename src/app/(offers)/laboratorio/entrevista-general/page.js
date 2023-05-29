'use client'

import { useState } from 'react'
import styles from '@/styles/laboratorySegments.module.css'
import labStyles from '@/styles/laboratory.module.css'
import { StepsBar } from '@/components/laboratory/stepsBar'
import { AnswersForm } from '@/components/laboratory/answersForm'
import { CircleCheck, InterviewIcon } from '@/components/icons/icons'
import { responseFormatsChatGPT } from '@/consts/responseFormatsChatGPT'
import { generalInterview } from '@/consts/generalInterview'

export default function Interview() {
  const [interview, setInterview] = useState(generalInterview)
  const [reviewedInterview, setReviewedInterview] = useState([])
  const [actualQuestion, setActualQuestion] = useState(interview[0])

  const linkQuestionsReview = (review) => {
    const formatedInterview = interview.map(int => {
      if(int.format === responseFormatsChatGPT.multipleChoiceQuestion) {
        return { ...int, answer: int.paragraphs[int.answer] }
      }
      return int
    })
    const answersInterviewJoin = review.map(revInt => {
      const question = formatedInterview.find(int => int.id === revInt.id)

      return { ...question, ...revInt }
    })

    setReviewedInterview(answersInterviewJoin)
  }

  return (
    <section className={`containerExplore ${styles.section}`}>
      <div className={styles.titleContainer}>
        <h1 className={labStyles.title}>
          Entrevista General
          <InterviewIcon />
        </h1>
      </div>
      <StepsBar
        interview={interview}
        actualQuestion={actualQuestion}
        setQuestion={setActualQuestion}
        setInterview={setInterview}
      />
      {
        reviewedInterview?.length > 0
          ? (
            <div className={styles.review}>

              <h3 className={styles.reviewTitle}>
                Entrevista completada
                <CircleCheck size='medium' />
              </h3>
              <h3 className={styles.reviewTitle}>
                Revisión y recomendaciones:
              </h3>

              <div className={styles.feedback}>
                {reviewedInterview.map(({ id, question, answer, feedback }, index) => (
                  <div className={styles.answerFeedback} key={id}>
                    <h4>Pregunta:</h4>
                    <p>{index + 1}. {question}</p>
                    <h4>Respuesta</h4>
                    <p>{answer}</p>
                    <h4>Revisión</h4>
                    <p>{feedback}</p>
                  </div>
                ))}
              </div>
            </div>
            )
          : <AnswersForm
              interview={interview}
              setInterview={setInterview}
              actualQuestion={actualQuestion}
              setActualQuestion={setActualQuestion}
              setReview={linkQuestionsReview}
            />
      }
    </section>
  )
}
