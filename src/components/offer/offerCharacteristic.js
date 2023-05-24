import offerStyles from '@/styles/offer.module.css'

export function OfferCharacteristic({ children, icon }) {
  return (
    <div className={offerStyles.characteristic}>
      {icon}
      <p>{children}</p>
    </div>
  )
}
