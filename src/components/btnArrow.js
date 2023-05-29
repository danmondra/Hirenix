import styles from '@/styles/explore.module.css'
import { ArrowRightIcon } from '@/components/icons/icons'

export function BtnArrow({ children, color, type = 'button', callback = null }) {
  return (
    <button
      type={type}
      className={`${styles.btnArrow} ${styles[color]}`}
      onClick={callback}
    >
      {children}
      <ArrowRightIcon size='medium' />
    </button>
  )
}
