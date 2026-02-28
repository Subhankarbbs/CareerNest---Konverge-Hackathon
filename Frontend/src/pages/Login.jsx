import React, { useState } from 'react'

const Login = () => {
  const [role, setRole] = useState('student')

  return (
    <div className='min-h-screen flex items-center justify-center bg-indigo-50 px-4'>
      <div className='bg-white shadow-lg rounded-2xl p-8 w-full max-w-md'>
        <h2 className='text-3xl font-bold text-center text-indigo-600 mb-6'>
          Login to CareerNest
        </h2>

        <form className='space-y-5'>
          {/* Role Selection */}
          <div>
            <label className='block text-sm font-medium mb-2'>Login As</label>
            <select
              className='w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
              value={role}
              onChange={(e) => setRole(e.target.value)}>
              <option value='student'>Student</option>
              <option value='admin'>Admin / Recruiter</option>
            </select>
          </div>

          {/* Email */}
          <div>
            <label className='block text-sm font-medium mb-1'>
              Email Address
            </label>
            <input
              type='email'
              placeholder='Enter your email'
              className='w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
            />
          </div>

          {/* Password */}
          <div>
            <label className='block text-sm font-medium mb-1'>Password</label>
            <input
              type='password'
              placeholder='Enter your password'
              className='w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
            />
          </div>

          {/* Login Button */}
          <button
            type='submit'
            className='w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg transition'>
            Login
          </button>
        </form>

        <a href='/register'>
          <p className='text-sm text-center mt-6'>
            Don’t have an account?{' '}
            <span className='text-indigo-600 hover:underline cursor-pointer'>
              Register
            </span>
          </p>
        </a>
      </div>
    </div>
  )
}

export default Login
