import React, { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'

const StudentDashboard = () => {
  const [links, setLinks] = useState({
    resume: '',
    linkedin: '',
    github: '',
  })

  const handleChange = (e) => {
    setLinks({
      ...links,
      [e.target.name]: e.target.value,
    })
  }

  const handleSave = (e) => {
    e.preventDefault()
    alert('Links Updated Successfully!')
  }

  return (
    <div className='min-h-screen bg-indigo-50 p-8'>
      <div className='max-w-6xl mx-auto'>
        {/* ================= PROFILE HEADER ================= */}
        <div className='bg-white rounded-2xl shadow-md p-8 mb-8 flex flex-col md:flex-row items-center md:items-start gap-6'>
          {/* Profile Picture */}
          <div className='w-32 h-32 rounded-full border-4 border-indigo-500 flex items-center justify-center bg-indigo-100'>
            <FaUserCircle className='text-indigo-500 text-7xl' />
          </div>

          {/* Basic Info */}
          <div className='flex-1'>
            <h2 className='text-3xl font-bold text-indigo-600'>John Doe</h2>
            <p className='text-gray-600 mt-1'>B.Tech Computer Science</p>

            <p className='mt-4 text-gray-700'>
              Passionate developer focused on building scalable web applications
              and solving real-world problems.
            </p>
          </div>
        </div>

        {/* ================= QUICK EDIT LINKS ================= */}
        <div className='bg-white rounded-2xl shadow-md p-8 mb-8'>
          <h3 className='text-xl font-semibold mb-6'>Quick Edit Links</h3>

          <form
            onSubmit={handleSave}
            className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div>
              <label className='block text-sm font-medium mb-1'>
                Resume Link
              </label>
              <input
                type='text'
                name='resume'
                value={links.resume}
                onChange={handleChange}
                className='w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500'
                placeholder='Paste resume link'
              />
            </div>

            <div>
              <label className='block text-sm font-medium mb-1'>LinkedIn</label>
              <input
                type='text'
                name='linkedin'
                value={links.linkedin}
                onChange={handleChange}
                className='w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500'
                placeholder='LinkedIn profile link'
              />
            </div>

            <div>
              <label className='block text-sm font-medium mb-1'>GitHub</label>
              <input
                type='text'
                name='github'
                value={links.github}
                onChange={handleChange}
                className='w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500'
                placeholder='GitHub profile link'
              />
            </div>

            <div className='md:col-span-3'>
              <button
                type='submit'
                className='bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-lg'>
                Save Links
              </button>
            </div>
          </form>
        </div>

        {/* ================= OVERVIEW ================= */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
          <div className='bg-white p-6 rounded-xl shadow-md'>
            <h3 className='text-gray-500 text-sm'>Total Applications</h3>
            <p className='text-3xl font-bold text-indigo-600 mt-2'>5</p>
          </div>

          <div className='bg-white p-6 rounded-xl shadow-md'>
            <h3 className='text-gray-500 text-sm'>Saved Opportunities</h3>
            <p className='text-3xl font-bold text-indigo-600 mt-2'>3</p>
          </div>

          <div className='bg-white p-6 rounded-xl shadow-md'>
            <h3 className='text-gray-500 text-sm'>Profile Completion</h3>
            <p className='text-3xl font-bold text-indigo-600 mt-2'>80%</p>
          </div>
        </div>

        {/* ================= APPLICATIONS SECTION ================= */}
        <div className='bg-white rounded-2xl shadow-md p-8'>
          <h3 className='text-xl font-semibold mb-6'>Recent Applications</h3>

          <table className='w-full text-left'>
            <thead>
              <tr className='border-b'>
                <th className='py-3'>Job Title</th>
                <th>Status</th>
                <th>Date Applied</th>
              </tr>
            </thead>

            <tbody>
              <tr className='border-b hover:bg-gray-50'>
                <td className='py-3'>Frontend Developer</td>
                <td className='text-yellow-600 font-medium'>Pending</td>
                <td>Feb 20, 2026</td>
              </tr>

              <tr className='border-b hover:bg-gray-50'>
                <td className='py-3'>React Intern</td>
                <td className='text-green-600 font-medium'>Accepted</td>
                <td>Feb 15, 2026</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default StudentDashboard
