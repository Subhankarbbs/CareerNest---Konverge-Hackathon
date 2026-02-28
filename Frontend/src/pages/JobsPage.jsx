import React, { useEffect, useState } from 'react'
import JobListings from '../Components/JobListings'
import { fetchJobs } from '../api/jobApi'

const JobsPage = () => {
  const [searchInput, setSearchInput] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [jobs, setJobs] = useState([])
  const [page, setPage] = useState(1)
  const [pages, setPages] = useState(1)
  const [loading, setLoading] = useState(false)

  const loadJobs = async () => {
    try {
      setLoading(true)
      const data = await fetchJobs(page, searchTerm)
      setJobs(data.jobs)
      setPages(data.pages)
    } catch (error) {
      console.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadJobs()
  }, [page, searchTerm])

  const handleSearch = () => {
    setPage(1)
    setSearchTerm(searchInput)
  }

  return (
    <section className='px-4 py-8'>
      <div className='container-xl lg:container m-auto mb-8'>
        <div className='flex flex-col md:flex-row gap-4'>
          <input
            type='text'
            placeholder='Search opportunities...'
            className='flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />

          <button
            onClick={handleSearch}
            className='bg-indigo-700 hover:bg-indigo-600 text-white px-6 py-2 rounded-lg transition'>
            Go
          </button>
        </div>
      </div>

      {loading ? (
        <p className='text-center'>Loading jobs...</p>
      ) : (
        <>
          <JobListings jobs={jobs} title='Explore All Opportunities' />

          {/* Pagination */}
          <div className='flex justify-center mt-8 gap-2'>
            {[...Array(pages).keys()].map((x) => (
              <button
                key={x + 1}
                onClick={() => setPage(x + 1)}
                className={`px-4 py-2 rounded ${
                  page === x + 1 ? 'bg-indigo-600 text-white' : 'bg-gray-200'
                }`}>
                {x + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </section>
  )
}

export default JobsPage
