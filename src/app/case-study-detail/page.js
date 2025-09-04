import CaseStudySection from '@/sections/CaseStudyDetailPage/CaseStudySection'
import ChallengesSection from '@/sections/CaseStudyDetailPage/ChallengesSection'
import ClientOverview from '@/sections/CaseStudyDetailPage/ClientOverviewSection'
import CaseHeroSection from '@/sections/CaseStudyDetailPage/HeroSection'
import React from 'react'

const Index = () => {
  return (
    <>
      <CaseHeroSection />
      <CaseStudySection />
      <ClientOverview />
      <ChallengesSection />
    </>
  )
}

export default Index