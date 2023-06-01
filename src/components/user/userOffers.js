'use client'

import { useEffect, useState } from 'react'
import styles from '@/styles/explore.module.css'
import { UsersOfferGroups } from '@/components/user/userOfferGroups'
import { UserOfferGroupsSkeleton } from './userOfferGroupsSkeleton'

export function UserOffers({ userToken }) {
  const [applications, setApplications] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getUserOffers = async () => {
      const res = await fetch('/api/user/offers', {
        method: 'POST'
      })
      const data = await res.json()
      setApplications(data?.applications)
      setLoading(false)
    }
    if(!userToken) return
    getUserOffers()
  }, [])

  if(!userToken) return <p>Incia sesión para ver tus candidaturas</p>
  if(loading) return <UserOfferGroupsSkeleton />

  return (
    <div className={styles.userOffers}>
      <UsersOfferGroups nameGroup='Candidaturas Activas' offerList={applications} />
    </div>
  )
}
