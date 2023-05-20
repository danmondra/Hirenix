import offerStyles from '@/styles/offer.module.css'

export function OfferDescription() {
  const text = `
Se precisan personas para trabajar en el puesto de Asesor/a Inmobiliario/a.

En el puesto se realizarán labores de intermediación inmobiliaria:
- Trato directo y telefónico con clientes.
- Valoración de inmuebles.
- Citas de venta.
- Organización de expedientes.
- Asistencia a notaria,...

A la/s persona/s seleccionada/s se le asignará/n una zona de competencias dónde desarrollar su puesto de trabajo.

No es necesario tener experiencia en el sector, siendo toda la formación diaria, a cargo de la empresa y además se accederá a los cursos de la escuela de formación de Tecnocasa.

Se necesitan personas que quieran aprender y tengan motivación de crecimiento para convertirse en un PROFESIONAL INMOBILIARIO de futuro.

Se ofrece:
- Contrato Indefinido.
- Salario fijo más importantes comisiones.
- Posibilidad de abrir su propia oficina de Tecnocasa, una vez formado adecuadamente.

También a destacar del puesto, su dinamismo, las actividades extra laborales (team buildings, eventos, comidas) y el buen ambiente de trabajo a respirar con personas de edad parecida y con intereses en común.`

  const paragraphs = text.split('\n')
  const paragraphsCleaned = paragraphs.filter(Boolean)

  const formattedParagraphs = paragraphsCleaned.map((paragraph, i) => {
    if(paragraph.startsWith('·') || paragraph.startsWith('-')) {
      return <li key={i}>{paragraph.slice(1)}</li>
    }
    return <p key={i}>{paragraph}</p>
  })

  return (
    <section className={offerStyles.description}>
      <h2 className={offerStyles.offerSubtitle}>Descripción</h2>
      {formattedParagraphs}
    </section>
  )
}
