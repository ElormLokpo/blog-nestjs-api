import React from 'react'
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <>
        <div className='border-y mb-20 py-2 flex items-center justify-center'>
           <div className='text-sm inline-flex gap-2'>
              <NavLink to = ''>Home</NavLink>
              <NavLink to = 'add'>Write Blog</NavLink>
              <NavLink to = 'blog'>My Blogs</NavLink>
              <NavLink to = '/signup' >Sign Up</NavLink>
              <NavLink to = '/signin' >Sign In</NavLink>

           </div>
        </div>
    </>
  )
}

export default Nav