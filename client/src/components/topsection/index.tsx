import React from 'react'
import Nav from '../nav'

function TopSection() {
  return (
    <>
        <div className='flex flex-col items-center mt-10 mb-7'>
            <p className='text-sm'>My Blog</p>
            <p className='text-3xl font-semibold mb-2 tracking-tighter'>Some Really Big Text Apparently</p>
            <p className='text-sm font-light'>Borem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <Nav />

    </>
  )
}

export default TopSection