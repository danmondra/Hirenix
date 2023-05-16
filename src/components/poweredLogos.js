import styles from '@/styles/landingPage.module.css'

export function PoweredLogos() {
  return (
    <div className={styles.poweredByGrid}>
      <a href='https://infojobs.net' target='_blank' rel='noopener noreferer'>
        <img src='/infojobs.png' alt='Logo of infojobs' lazy='loading' />
      </a>
      <a href='https://midu.dev' target='_blank' rel='noopener noreferer'>
        <img src='/midudev.png' alt='Logo of Midu.dev' lazy='loading' />
      </a>
      <a href='https://openai.com' target='_blank' rel='noopener noreferer'>
        <img src='/openAi.png' alt='Logo of openAi' lazy='loading' />
      </a>
      <a href='https://cohere.com' target='_blank' rel='noopener noreferer'>
        <img src='/cohere.png' alt='Logo of Cohere' lazy='loading' />
      </a>
    </div>
  )
}
