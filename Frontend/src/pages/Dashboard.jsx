import React from 'react'
import { FaUserShield } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='min-h-screen bg-indigo-50 p-8'>
      <div className='max-w-6xl mx-auto'>
        {/* ================= HEADER ================= */}
        <div className='bg-white rounded-2xl shadow-md p-8 mb-8 flex items-center gap-6'>
          <div className='w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center'>
            <FaUserShield className='text-indigo-600 text-4xl' />
          </div>

          <div>
            <h2 className='text-3xl font-bold text-indigo-600'>
              Admin Dashboard
            </h2>
            <p className='text-gray-600 mt-1'>
              Manage opportunities and track platform activity
            </p>
          </div>
        </div>

        {/* ================= OVERVIEW ================= */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
          <div className='bg-white p-6 rounded-xl shadow-md'>
            <h3 className='text-gray-500 text-sm'>Total Opportunities</h3>
            <p className='text-3xl font-bold text-indigo-600 mt-2'>24</p>
          </div>

          <div className='bg-white p-6 rounded-xl shadow-md'>
            <h3 className='text-gray-500 text-sm'>Total Applications</h3>
            <p className='text-3xl font-bold text-indigo-600 mt-2'>132</p>
          </div>

          <div className='bg-white p-6 rounded-xl shadow-md'>
            <h3 className='text-gray-500 text-sm'>Active Listings</h3>
            <p className='text-3xl font-bold text-indigo-600 mt-2'>18</p>
          </div>
        </div>

        {/* ================= MANAGE OPPORTUNITIES ================= */}
        <div className='bg-white rounded-2xl shadow-md p-8'>
          <div className='flex justify-between items-center mb-6'>
            <h3 className='text-xl font-semibold'>Manage Opportunities</h3>

            <Link
              to='/admin/add-job'
              className='bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-lg'>
              + Add New Opportunity
            </Link>
          </div>

          <table className='w-full text-left'>
            <thead>
              <tr className='border-b'>
                <th className='py-3'>Title</th>
                <th>Type</th>
                <th>Location</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr className='border-b hover:bg-gray-50'>
                <td className='py-3'>Frontend Developer</td>
                <td>Full-Time</td>
                <td>Bangalore</td>
                <td className='text-green-600 font-medium'>Active</td>
                <td className='space-x-4'>
                  <button className='text-indigo-600 hover:underline'>
                    Edit
                  </button>
                  <button className='text-red-600 hover:underline'>
                    Delete
                  </button>
                </td>
              </tr>

              <tr className='border-b hover:bg-gray-50'>
                <td className='py-3'>React Intern</td>
                <td>Internship</td>
                <td>Remote</td>
                <td className='text-green-600 font-medium'>Active</td>
                <td className='space-x-4'>
                  <button className='text-indigo-600 hover:underline'>
                    Edit
                  </button>
                  <button className='text-red-600 hover:underline'>
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
