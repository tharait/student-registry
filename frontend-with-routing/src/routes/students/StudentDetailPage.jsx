import React from 'react'
import { useParams } from 'react-router-dom'

export default function StudentDetailPage() {
  const params = useParams();
    
  return (
    <div>Student Detail: {params.studentId}</div>
  )
}
