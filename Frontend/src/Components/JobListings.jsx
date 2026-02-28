import React, { useEffect, useState } from 'react'
import JobListing from './JobListing'
import { fetchJobs } from '../api/jobApi'

const JobListings = ({ isHome = false, jobs: externalJobs }) => {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(!externalJobs)
  const [error, setError] = useState('')

  useEffect(() => {
    // If jobs are passed from parent (Explore page)
    if (externalJobs) {
      setJobs(externalJobs)
      setLoading(false)
      return
    }

    // Otherwise fetch internally (Home page)
    const loadJobs = async () => {
      try {
        const data = await fetchJobs()
        const jobData = data.jobs

        setJobs(isHome ? jobData.slice(0, 3) : jobData)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadJobs()
  }, [isHome, externalJobs])

  if (loading) return <p className='text-center'>Loading jobs...</p>
  if (error) return <p className='text-center text-red-500'>{error}</p>

  return (
    <section className='bg-indigo-50 px-4 py-16'>
      <div className='container-xl lg:container m-auto'>
        <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
          {isHome ? 'Latest Opportunities' : 'Explore All Opportunities'}
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {jobs.length === 0 ? (
            <p>No jobs found.</p>
          ) : (
            jobs.map((job) => <JobListing key={job._id} job={job} />)
          )}
        </div>
      </div>
    </section>
  )
}

export default JobListings
