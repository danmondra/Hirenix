import styles from '@/styles/explore.module.css'
import { ArrowRight } from '@/components/icons'

export function BtnArrow({ children, color }) {
  return (
    <button
      type='submit'
      className={`${styles.btnArrow} ${styles[color]}`}
    >
      {children}
      <ArrowRight size='medium' />
    </button>
  )
}
