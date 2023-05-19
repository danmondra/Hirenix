import styles from '@/styles/explore.module.css'

export function BgAnimationStrokes() {
  return (
    <div className={styles.bgAnimationStrokes}>
      <svg className={styles.svg_WDAo} viewBox='0 0 1 1' style={{ width: '100%', zIndex: -1, position: 'absolute' }}>
        <path
          d='M0.3,0.5a0.2,0.45 0 1,0 0.4,0a0.2,0.45 0 1,0 -0.4,0' fill='none' stroke='var(--color-greenPrimary)' stroke-linecap='round' stroke-width='0.055' className={styles.p_ZII8}
          style={{ transformOrigin: 'center center', transform: 'rotate(0)', animation: 'bganimation 20s linear infinite', strokeDasharray: '0.4236540522651584 1.6946162090606336' }}
        />
        <path d='M0.3,0.5a0.2,0.45 0 1,0 0.4,0a0.2,0.45 0 1,0 -0.4,0' fill='none' stroke='var(--color-greenPrimary)' stroke-linecap='round' stroke-width='0.055' className={styles.p_ZII8} style={{ transformOrigin: 'center center', transform: 'rotate(240deg)', animation: 'bganimation 20s linear infinite', strokeDasharray: '0.4236540522651584 1.6946162090606336' }} />
      </svg>
    </div>
  )
}
