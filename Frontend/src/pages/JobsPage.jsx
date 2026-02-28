import React, { useState } from 'react'
import JobListings from '../Components/JobListings'
import jobs from '../jobs.json'

const JobsPage = () => {
  const [searchInput, setSearchInput] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('All')

  // Apply search only when Go is clicked
  const handleSearch = () => {
    setSearchTerm(searchInput)
  }

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())

    const matchesType = filterType === 'All' || job.type === filterType

    return matchesSearch && matchesType
  })

  return (
    <section className='px-4 py-8'>
      <div className='container-xl lg:container m-auto mb-8'>
        <div className='flex flex-col md:flex-row gap-4'>
          {/* Search Input */}
          <input
            type='text'
            placeholder='Search opportunities...'
            className='flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />

          {/* Go Button */}
          <button
            onClick={handleSearch}
            className='bg-indigo-700 hover:bg-indigo-600 text-white px-6 py-2 rounded-lg transition'>
            Go
          </button>

          {/* Filter Dropdown */}
          <select
            className='px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}>
            <option value='All'>All Types</option>
            <option value='Full-Time'>Full-Time</option>
            <option value='Internship'>Internship</option>
          </select>
        </div>
      </div>

      <JobListings jobs={filteredJobs} />
    </section>
  )
}

export default JobsPage
