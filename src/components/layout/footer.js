import { Logo } from '@/components/layout/logo'
import { NavigationLinks } from '@/components/layout/navigationLinks'

export function Footer() {
  return (
    <footer className='footer'>
      <div className='container footerContainer'>
        <div className='footerGroup'>
          <Logo />
          <p className='footerAcknowledgment'>Enfocamos nuestros esfuerzos en hacer que, como candidato, tengas una mejor experiencia.</p>
          <p className='footerAcknowledgment'>Gracias a <a href='https://infojobs.net'>infojobs</a> y a <a href='https://midu.dev'>midudev</a> por la iniciativa.</p>
        </div>
        <div className='footerGroup'>
          <h3>Menú</h3>
          <NavigationLinks />
        </div>
        <div className='footerGroup'>
          {/* TODO -- Make a object */}
          <h3>Productos</h3>
          <p>Análisis y mejora de CV</p>
          <p>Obtener compatibilidad con un puesto</p>
          <p>Simulación de entrevistas</p>
          <p>Reclutamiento</p>
          <p>Pruebas Técnicas</p>
        </div>
      </div>
    </footer>
  )
}
