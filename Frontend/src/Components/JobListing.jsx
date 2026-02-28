import React, { useState } from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const JobListing = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false)

  const isLongDescription = job.description.length > 120

  const description = showFullDescription
    ? job.description
    : isLongDescription
      ? job.description.substring(0, 120) + '...'
      : job.description

  return (
    <div className='bg-white rounded-2xl shadow-sm hover:shadow-lg transition duration-300 border border-gray-100'>
      <div className='p-6'>
        {/* Title */}
        <h3 className='text-xl font-semibold text-gray-800 mb-3'>
          {job.title}
        </h3>

        {/* Company */}
        <p className='text-sm text-indigo-600 mb-2 font-medium'>
          {job.company}
        </p>

        {/* Description */}
        <p className='text-gray-600 text-sm mb-4'>{description}</p>

        {isLongDescription && (
          <button
            onClick={() => setShowFullDescription((prev) => !prev)}
            className='text-indigo-600 text-sm font-medium hover:underline mb-4'>
            {showFullDescription ? 'Show Less' : 'Show More'}
          </button>
        )}

        {/* Salary */}
        {job.salary ? (
          <p className='text-green-600 font-semibold mb-4'>
            {new Intl.NumberFormat('en-IN', {
              style: 'currency',
              currency: 'INR',
              maximumFractionDigits: 0,
            }).format(job.salary)}
          </p>
        ) : (
          <p className='text-gray-400 text-sm mb-4'>Salary Not Disclosed</p>
        )}

        <hr className='mb-4' />

        {/* Location + Button */}
        <div className='flex justify-between items-center'>
          <div className='text-gray-500 text-sm flex items-center'>
            <FaMapMarkerAlt className='mr-2 text-indigo-500' />
            {job.location}
          </div>

          <Link
            to={`/job/${job._id}`}
            className='bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm transition'>
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default JobListing
