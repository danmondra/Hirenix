import styles from '@/styles/landingPage.module.css'
import Image from 'next/image'

export function PoweredLogos() {
  return (
    <div className={styles.poweredByGrid}>
      <a href='https://infojobs.net' target='_blank' rel='noopener noreferer'>
        <Image src='/infojobs.png' alt='Logo of infojobs' width={200} height={50} />
      </a>
      <a href='https://midu.dev' target='_blank' rel='noopener noreferer'>
        <Image src='/midudev.png' alt='Logo of Midu.dev' width={200} height={50} />
      </a>
      <a href='https://openai.com' target='_blank' rel='noopener noreferer'>
        <Image src='/openAi.png' alt='Logo of openAi' width={200} height={50} />
      </a>
      <a href='https://cohere.com' target='_blank' rel='noopener noreferer'>
        <Image src='/cohere.png' alt='Logo of Cohere' width={200} height={50} />
      </a>
    </div>
  )
}
