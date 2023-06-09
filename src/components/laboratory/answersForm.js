import styles from '@/styles/laboratorySegments.module.css'
import exploreStyles from '@/styles/explore.module.css'
import { ArrowRightIcon } from '@/components/icons/icons'
import { BtnArrow } from '@/components/btnArrow'
import { responseFormatsChatGPT } from '@/consts/responseFormatsChatGPT'
import { useEffect, useState } from 'react'
import { getGPTResponse } from '@/services/getGPTResponse'

export function AnswersForm({ endpoint, interview, setInterview, actualQuestion, setActualQuestion, handleData }) {
  const [answer, setAnswer] = useState('')
  const [loading, setLoading] = useState(false)

  const {
    id,
    format,
    paragraphs,
    question,
    answer: answerSaved
  } = actualQuestion

  useEffect(() => {
    setAnswer(answerSaved ?? '')
  }, [actualQuestion])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const interviewWithLastAnswer = interview.map(int => int.id === id ? { ...actualQuestion, answer } : int)
    // Verify that have all answers
    if(interviewWithLastAnswer.some(({ answer }) => !answer)) {
      // TODO
      console.log('cancelado')
      return
    }

    setLoading(true)
    const formatedInterview = interviewWithLastAnswer.map(question => {
      let formatedAnswer = question.answer
      if(question.format === responseFormatsChatGPT.multipleChoiceQuestion) {
        formatedAnswer = question.paragraphs[question.answer]
      }
      return {
        id: question.id,
        question: question.question,
        answer: formatedAnswer
      }
    })

    const data = await getGPTResponse(endpoint, { interview: formatedInterview })
    setLoading(false)
    handleData(data)
  }

  const handleChange = (e) => {
    setAnswer(e.currentTarget.value)
  }

  const handleClick = (e) => {
    e.preventDefault()
    const interviewWithAnswer = interview.map(int => int.id === id ? { ...actualQuestion, answer } : int)
    setInterview(interviewWithAnswer)
    setAnswer('')
    setActualQuestion(interview[id + 1])
  }

  return (
    <form
      className={styles.formAnswer}
      onSubmit={handleSubmit}
    >
      <h3 className={styles.question}>{id + 1}. {question}</h3>
      {
        format === responseFormatsChatGPT.openEndedQuestion &&
          <fieldset className={styles.answersGroup}>
            <label htmlFor='answer'>Respuesta:</label>
            <textarea
              id='answer'
              name='answer'
              cols='10'
              rows='5'
              value={answer}
              onChange={handleChange}
            />
          </fieldset>
      }
      {
        format === responseFormatsChatGPT.multipleChoiceQuestion &&
          <fieldset className={styles.answersGroup}>
            {Object.keys(paragraphs).map(key => (
              <div className={styles.radioContainer} key={key}>
                <input
                  id={'option' + key}
                  type='radio'
                  name={'question' + id}
                  value={key}
                  checked={answer === key}
                  onChange={handleChange}
                />
                <label htmlFor={'option' + key}>{paragraphs[key]}</label>
              </div>
            ))}
          </fieldset>
      }

      {
        interview.length - 1 !== interview.findIndex(ques => ques.id === actualQuestion.id)
          ? (
            <BtnArrow
              color='green'
              type='button'
              callback={handleClick}
            >
              Siguiente
            </BtnArrow>
            )

          : (
            <button
              type='submit'
              className={`${exploreStyles.btnArrow} ${exploreStyles.green}`}
            >
              {
                loading
                  ? <>Revisando <div className='lds-dual-ring small green' /></>
                  : <>Finalizar <ArrowRightIcon size='small' /></>
              }
            </button>
            )
      }
    </form>
  )
}
