'use client'

import styles from '@/styles/laboratorySegments.module.css'
import { UserSkillsList } from '@/components/offer/page/skillsList'
import { CircleCheck } from '@/components/icons/icons'

export function UserProfile({ profile }) {
  return (
    <>
      <div className={styles.review}>

        <header className={styles.reviewHeader}>
          <h3 className={styles.reviewTitle}>
            Perfil Listo
            <CircleCheck size='medium' />
          </h3>
          <button
            type='button'
            className={styles.reviewEdit}
          />
        </header>
        <div className={styles.feedback}>
          <div className={styles.answerFeedback}>
            <h4>Tus Habilidades:</h4>
            {profile?.skills?.length !== 0 &&
              <UserSkillsList skillsList={profile?.skills} />}
            <h4>Tu experiencia:</h4>
            <p>{profile?.experience}</p>
            <h4>Tus áreas de trabajo:</h4>
            <p>{profile?.jobAreas}</p>
            <h4>Resides en:</h4>
            <p>{profile?.location}</p>
          </div>
        </div>
      </div>
    </>
  )
}
