import styles from '@/styles/explore.module.css'
import { ArrowRight } from '@/components/icons'

export function BtnArrow({ children, color, type = 'button' }) {
  return (
    <button
      type={type}
      className={`${styles.btnArrow} ${styles[color]}`}
    >
      {children}
      <ArrowRight size='medium' />
    </button>
  )
}
