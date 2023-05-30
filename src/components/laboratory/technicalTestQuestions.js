'use client'

import styles from '@/styles/laboratorySegments.module.css'
import { useEffect, useState } from 'react'
import { StepsBar } from '@/components/laboratory/stepsBar'
import { AnswersForm } from '@/components/laboratory/answersForm'
import { SabiasQue } from './sabiasQue'
import { responseFormatsChatGPT } from '@/consts/responseFormatsChatGPT'
import { CircleCheck } from '../icons/icons'

export function TechincalTestQuestions({ offerId, type }) {
  const [interview, setInterview] = useState([])
  const [reviewedInterview, setReviewedInterview] = useState([])
  const [actualQuestion, setActualQuestion] = useState([])

  useEffect(() => {
    const getTechnicalTest = async () => {
      const data = await fetch(`/api/technicalTest/${offerId}`)
      const technicalTest = await data.json()
      const formatTechnicalTest = technicalTest.map(ques => ({ ...ques, format: 'open-ended-question' }))

      setInterview(formatTechnicalTest)
      setActualQuestion(formatTechnicalTest[0])
    }

    if(interview.length > 0) return
    getTechnicalTest()
  }, [])

  const handleData = (review) => {
    const interviewWithLastAnswer = interview.map(int => int.id === actualQuestion?.id ? actualQuestion : int)

    const formatedInterview = interviewWithLastAnswer.map(int => {
      if(int.format === responseFormatsChatGPT.multipleChoiceQuestion) {
        return { ...int, answer: int.paragraphs[int.answer] }
      }
      return int
    })

    const answersInterviewJoin = review?.map(revInt => {
      const question = formatedInterview.find(int => int.id === revInt.id)

      return { ...question, ...revInt }
    })

    setReviewedInterview(answersInterviewJoin)
  }

  return (
    <>
      {
        actualQuestion?.question
          ? reviewedInterview?.length > 0
            ? (
            <div className={styles.review}>
              <h3 className={styles.reviewTitle}>
                Prueba Técnica completada
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
            : <>
              <StepsBar
                interview={interview}
                actualQuestion={actualQuestion}
                setQuestion={setActualQuestion}
                setInterview={setInterview}
              />
              <AnswersForm
                endpoint='/technicalTest'
                interview={interview}
                setInterview={setInterview}
                actualQuestion={actualQuestion}
                setActualQuestion={setActualQuestion}
                handleData={handleData}
              />
              </>
          : <SabiasQue type={type} />
      }
    </>
  )
}
