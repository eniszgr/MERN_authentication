import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <header className='fixed top-0 w-full z-50 bg-indigo-100 shadow-sm'>
      <nav className='h-14 flex justify-between items-center px-9'>
        <Link to="/">Auth Project</Link>
        
        <ul className='flex gap-8 items-center'>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/auth">Login</NavLink>
          </li>

        </ul>
      </nav>
    </header>
  )
}

export default Header