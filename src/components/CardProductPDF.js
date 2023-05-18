import styles from '@/styles/explore.module.css'
import { Labs } from '@/components/icons'
import { BtnArrow } from './btnArrow'

export function CardProductPDF({ children, color, textBtn }) {
  return (
    <article className={`${styles.cardProduct} ${styles[color]}`}>
      <header>
        <Labs size='large' />
        <h3 className={styles.cardProductTitle}>
          {children}
        </h3>
      </header>
      <BtnArrow color={color}>
        {textBtn}
      </BtnArrow>
    </article>
  )
}
