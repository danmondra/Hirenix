import '@/styles/globals.css'
import { Be_Vietnam_Pro } from 'next/font/google'

export const metadata = {
  title: 'Hirenix',
  description: 'Search and find talent with the power of Artificial Intelligence'
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
