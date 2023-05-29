'use client'

import { useEffect, useState } from 'react'
import styles from '@/styles/laboratorySegments.module.css'
import labStyles from '@/styles/laboratory.module.css'
import { StepsBar } from '@/components/laboratory/stepsBar'
import { AnswersForm } from '@/components/laboratory/answersForm'
import { discoverJobInterview } from '@/consts/discoverJobInterview'
import { UserSkillsList } from '@/components/offer/page/skillsList'
import { CircleCheck, EditIcon, InterviewIcon } from '@/components/icons/icons'

export default function Discover() {
  const [interview, setInterview] = useState(discoverJobInterview)
  const [profile, setProfile] = useState([])
  const [actualQuestion, setActualQuestion] = useState(interview[0])

  useEffect(() => {
    if(typeof window !== 'undefined') {
      const profileLS = JSON.parse(localStorage.getItem('userProfile'))
      setProfile(profileLS)
    }
  }, [])

  const saveProfile = (profileData) => {
    if(typeof window !== 'undefined') {
      localStorage.setItem('userProfile', JSON.stringify(profileData))
    }
    setProfile(profileData)
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
        profile?.experience
          ? (
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
                    onClick={() => setProfile([])}
                  >
                    <EditIcon size='medium' />
                  </button>
                </header>
                <div className={styles.feedback}>
                  <div className={styles.answerFeedback}>
                    <h4>Tus Habilidades:</h4>
                    {profile.skills.length !== 0 &&
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
          : (
            <>
              <StepsBar
                interview={interview}
                actualQuestion={actualQuestion}
                setQuestion={setActualQuestion}
                setInterview={setInterview}
              />
              <AnswersForm
                endpoint='/jobDiscover'
                interview={interview}
                setInterview={setInterview}
                actualQuestion={actualQuestion}
                setActualQuestion={setActualQuestion}
                handleData={saveProfile}
              />
            </>
            )
      }
    </section>
  )
}
