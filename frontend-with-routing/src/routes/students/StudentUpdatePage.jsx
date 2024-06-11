import React from 'react'
import { useParams } from 'react-router-dom'

export default function StudentUpdatePage() {
  const params = useParams();
  
  console.log(params);

  return (
    <div>Student Update Page</div>
  )
}
