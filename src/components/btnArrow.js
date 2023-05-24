import styles from '@/styles/explore.module.css'
import { ArrowRightIcon } from '@/components/icons/icons'

export function BtnArrow({ children, color, type = 'button' }) {
  return (
    <button
      type={type}
      className={`${styles.btnArrow} ${styles[color]}`}
    >
      {children}
      <ArrowRightIcon size='medium' />
    </button>
  )
}
