import styles from '@/styles/explore.module.css'
import { ArrowRightIcon, LabsIcon, MagicSearchIcon, ScanIcon } from '@/components/icons/icons'
import Link from 'next/link'

export function CardProduct({ product }) {
  const products = {
    labs: {
      title: 'Practica en el laboratorio',
      textBtn: 'Practicar',
      color: 'blue',
      icon: <LabsIcon size='normal' />,
      link: '/laboratorio'
    },
    search: {
      title: 'Busca acorde a tu perfil',
      textBtn: 'Buscar',
      color: 'purpura',
      icon: <MagicSearchIcon size='normal' />,
      link: '/search'
    },
    descubrir: {
      title: 'Descubre tu puesto',
      textBtn: 'Descubrir',
      color: 'green',
      icon: <ScanIcon size='normal' />,
      link: '/descubrir-puesto'
    }
  }

  return (
    <article className={`${styles.cardProduct} ${styles[products[product].color]}`}>
      <header>
        {products[product].icon}
        <h3 className={styles.cardProductTitle}>
          {products[product].title}
        </h3>
      </header>
      <Link
        href={products[product].link}
        className={`${styles.btnArrow} ${styles[products[product].color]}`}
      >
        {products[product].textBtn}
        <ArrowRightIcon size='medium' />
      </Link>
    </article>
  )
}
