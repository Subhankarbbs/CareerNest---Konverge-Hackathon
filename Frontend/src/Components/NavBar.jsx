import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const NavBar = () => {
  const linkClass = ({ isActive }) =>
    `rounded-md px-3 py-2 transition ${
      isActive ? 'bg-black text-white' : 'text-white hover:bg-gray-900'
    }`

  return (
    <nav className='bg-indigo-700 border-b border-indigo-500'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between'>
          <div className='flex flex-1 items-center md:justify-start'>
            {/* Logo */}
            <Link className='flex items-center mr-6' to='/'>
              <img className='h-10 w-auto' src={logo} alt='CareerNest' />
              <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                CareerNest
              </span>
            </Link>

            <div className='ml-auto flex space-x-2'>
              <NavLink to='/' end className={linkClass}>
                Home
              </NavLink>

              <NavLink to='/explore' className={linkClass}>
                Explore
              </NavLink>

              <NavLink to='/login' className={linkClass}>
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
