import '@/styles/globals.css'
import { Be_Vietnam_Pro } from 'next/font/google'

export const metadata = {
  title: 'Hirenix',
  description: 'Enfoca tus esfuerzos para encontrar empleo donde realmente lo vale.',
  openGraph: {
    images: '/metaimage.jpg',
    title: 'Hirenix - El futuro de la busqueda de empleo',
    description: 'Enfoca tus esfuerzos para encontrar empleo donde realmente lo vale.',
    sitename: 'Hirenix',
    locale: 'es_ES',
    type: 'website'
  }
}

const vietnamPro = Be_Vietnam_Pro({
  weight: ['400', '500', '700'],
  style: 'normal',
  subsets: ['latin']
})

export default function RootLayout({ children }) {
  return (
    <html lang='es' className={vietnamPro.className}>
      <body>
        {children}
      </body>
    </html>
  )
}
