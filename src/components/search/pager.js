'use client'

import Link from 'next/link'
import styles from '@/styles/pager.module.css'
import { PagerBackIcon, PagerForwardIcon } from '@/components/icons/icons'

export function Pager({ searchParams }) {
  const { page } = searchParams
  const actualPage = Number(page) < 1 ? 1 : Number(page)

  return (
    <div className={styles.pager}>
      <Link href={`/search?page=${actualPage - 1}`} className={styles.navigationLink}>
        <PagerBackIcon size='normal' />
      </Link>
      {[actualPage - 1, actualPage, actualPage + 1].map((value, i) => (
        <Link
          href={`/search?page=${value}`}
          key={i}
          className={`
              ${styles.numberLink}
              ${i === 1 ? styles.active : ''}
              ${value === 0 ? styles.disable : ''}
            `}
        >
          {value}
        </Link>
      ))}
      <Link href={`/search?page=${actualPage + 1}`} className={styles.navigationLink}>
        <PagerForwardIcon size='normal' />
      </Link>
    </div>
  )
}
