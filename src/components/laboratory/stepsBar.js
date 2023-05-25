import styles from '@/styles/laboratorySegments.module.css'

export function StepsBar({ interview, actualQuestion, setQuestion }) {
  const { id } = actualQuestion
  console.log(actualQuestion)

  return (
    <div className={styles.steps}>
      {interview.map((_, i) => (
        <div className={`${styles.stepContainer} ${i < id ? styles.completed : ''}`} key={i + 1}>
          <button className={styles.step} onClick={() => setQuestion(interview[i])}>{i + 1}</button>
        </div>
      ))}
    </div>
  )
}
