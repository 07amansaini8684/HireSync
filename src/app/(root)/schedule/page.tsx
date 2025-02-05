
"use client"

import { useUserRole } from '@/hooks/useUserRole';
import { Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react'
import InterviewScheduleUI from './InterviewScheduleUI';

const Schedule = () => {
  const router = useRouter();
  const { isInterviewer, isCandidate, isLoading } = useUserRole();


  if(isLoading) return <Loader/>
  if(!isInterviewer) return router.push('/')
  return (
    <InterviewScheduleUI/>
  )
}

export default Schedule