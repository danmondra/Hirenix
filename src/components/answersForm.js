import styles from '@/styles/laboratorySegments.module.css'
import { BtnArrow } from '@/components/btnArrow'
import { responseFormatsChatGPT } from '@/consts/responseFormatsChatGPT'

export function AnswersForm({ interview, actualQuestion, setActualQuestion }) {
  const {
    id,
    format,
    paragraphs,
    question
  } = actualQuestion

  const handleSubmit = (e) => {
    e.preventDefault()
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
            <textarea id='answer' name='answer' cols='10' rows='5' />
          </fieldset>
      }
      {
        format === responseFormatsChatGPT.multipleChoiceQuestion &&
          <fieldset className={styles.answersGroup}>
            {Object.keys(paragraphs).map(key => (
              <fieldset className={styles.radioContainer} key={key}>
                <input id={'option' + key} type='radio' name={'question' + id} />
                <label htmlFor={'option' + key}>{paragraphs[key]}</label>
              </fieldset>
            ))}
          </fieldset>
      }

      <BtnArrow color='green' type='submit'>
        {interview.length - 1 > actualQuestion.id ? 'Siguiente' : 'Finalizar'}
      </BtnArrow>
    </form>
  )
}
