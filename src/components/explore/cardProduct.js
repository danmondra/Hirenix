import styles from '@/styles/explore.module.css'
import { BtnArrow } from '@/components/btnArrow'
import { LabsIcon, MagicSearchIcon, ScanIcon } from '@/components/icons/icons'

export function CardProduct({ product }) {
  const products = {
    labs: {
      title: 'Practica en el laboratorio',
      textBtn: 'Practicar',
      color: 'blue',
      icon: <LabsIcon size='normal' />
    },
    search: {
      title: 'Busca acorde a tu perfil',
      textBtn: 'Buscar',
      color: 'purpura',
      icon: <MagicSearchIcon size='normal' />
    },
    cv: {
      title: 'Sube y mejora tu CV',
      textBtn: 'Subir',
      color: 'green',
      icon: <ScanIcon size='normal' />
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
      <BtnArrow color={products[product].color}>
        {products[product].textBtn}
      </BtnArrow>
    </article>
  )
}
