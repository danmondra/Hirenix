import styles from '@/styles/offer.module.css'

export function formatText(text) {
  const paragraphs = text.split('\n')
  const paragraphsWithoutSpaces = paragraphs.map(p => p.trim())
  const paragraphsCleaned = paragraphsWithoutSpaces.filter(Boolean)

  const formattedParagraphs = paragraphsCleaned.map((paragraph, i) => {
    if(paragraph.startsWith('·') || paragraph.startsWith('-') || paragraph.startsWith('*')) {
      return <p key={i} className={styles.listItem}>{paragraph.slice(1)}</p>
    }
    return <p key={i} className={styles.descriptionItem}>{paragraph}</p>
  })

  return formattedParagraphs
}
