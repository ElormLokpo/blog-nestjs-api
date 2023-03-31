import React from 'react'

function Nav() {
  return (
    <>
        <div className='border-y mb-20 py-2 flex items-center justify-center'>
           <div className='text-sm inline-flex gap-2'>
              <p>Home</p>
              <p>Write Blog</p>
              <p>My Blogs</p>
              <p>Profile</p>
              <p>Sign Out</p>

           </div>
        </div>
    </>
  )
}

export default Nav