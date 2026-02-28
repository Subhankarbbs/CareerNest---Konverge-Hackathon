import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createJob } from '../api/jobApi'

const AddJob = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    salary: '',
    description: '',
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      setError('')

      // Convert salary to Number (important for MongoDB)
      const jobData = {
        ...formData,
        salary: formData.salary ? Number(formData.salary) : undefined,
      }

      await createJob(jobData)

      alert('Job Posted Successfully!')
      navigate('/explore') // redirect after success
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='min-h-screen bg-indigo-50 p-8'>
      <div className='max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8'>
        <h2 className='text-3xl font-bold text-indigo-600 mb-8'>
          Add New Opportunity
        </h2>

        {error && <p className='text-red-500 mb-4'>{error}</p>}

        <form onSubmit={handleSubmit} className='space-y-6'>
          <input
            type='text'
            name='title'
            value={formData.title}
            onChange={handleChange}
            placeholder='Job Title'
            className='w-full border px-4 py-2 rounded-lg'
            required
          />

          <input
            type='text'
            name='company'
            value={formData.company}
            onChange={handleChange}
            placeholder='Company Name'
            className='w-full border px-4 py-2 rounded-lg'
            required
          />

          <input
            type='text'
            name='location'
            value={formData.location}
            onChange={handleChange}
            placeholder='Location'
            className='w-full border px-4 py-2 rounded-lg'
            required
          />

          <input
            type='number'
            name='salary'
            value={formData.salary}
            onChange={handleChange}
            placeholder='Salary'
            className='w-full border px-4 py-2 rounded-lg'
          />

          <textarea
            rows='5'
            name='description'
            value={formData.description}
            onChange={handleChange}
            placeholder='Job Description'
            className='w-full border px-4 py-2 rounded-lg'
            required
          />

          <button
            type='submit'
            disabled={loading}
            className='bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-lg'>
            {loading ? 'Posting...' : 'Post Opportunity'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddJob
