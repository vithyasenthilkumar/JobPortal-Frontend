import React, { useState, useEffect } from 'react'
import './GetAllJobsComponent.css'
import JobComponent from './JobComponent'

function GetAllJobsComponent() {
    const [jobs, setJobs] = useState([])

    const fetchAllJobs  = async() => {
        const response = await fetch('http://localhost:3500/api/v1/jobs')
        const data = await response.json()
        console.log(data);
        setJobs(data)
    }

    useEffect(() => {
        fetchAllJobs()
    }, [])

  return (
    <div className='jobs'>
        {jobs.map(job=>(
            <JobComponent job={job}/>
        ))}
    </div>
  )
}

export default GetAllJobsComponent