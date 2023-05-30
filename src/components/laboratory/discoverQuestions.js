'use client'

import { useState } from 'react'
import { StepsBar } from '@/components/laboratory/stepsBar'
import { AnswersForm } from '@/components/laboratory/answersForm'
import { discoverJobInterview } from '@/consts/discoverJobInterview'
import { useRouter } from 'next/navigation'

export function DiscoverQuestions() {
  const [interview, setInterview] = useState(discoverJobInterview)
  const [actualQuestion, setActualQuestion] = useState(interview[0])
  const router = useRouter()

  const handleData = () => {
    router.refresh()
  }

  return (
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
        handleData={handleData}
      />
    </>
  )
}
