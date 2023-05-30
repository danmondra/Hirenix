import styles from '@/styles/laboratorySegments.module.css'
import labStyles from '@/styles/laboratory.module.css'

import { InterviewIcon } from '@/components/icons/icons'
import { cookies } from 'next/headers'
import { DiscoverQuestions } from '@/components/laboratory/discoverQuestions'
import { UserProfile } from '@/components/laboratory/userProfile'

export default function Discover() {
  const cookieStore = cookies()
  let userProfile
  if(cookieStore.has('userProfileGenerated')) {
    const userProfileGenerated = cookieStore.get('userProfileGenerated')
    userProfile = JSON.parse(decodeURIComponent(userProfileGenerated?.value))
  }

  return (
    <section className={`containerExplore ${styles.section}`}>
      <div className={styles.titleContainer}>
        <h1 className={labStyles.title}>
          Descubre tu puesto
          <InterviewIcon />
        </h1>
      </div>
      {
       userProfile
         ? <UserProfile profile={userProfile} />
         : <DiscoverQuestions />
      }
    </section>
  )
}
