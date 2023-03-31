import React from 'react'

function SignUp() {
  return (
    <div className='flex flex-col items-center justify-center h-full'>
        <div className='flex justify-center mb-7'>
            <p className='text-3xl font-semibold mb-2 tracking-tighter'>Welcome</p>
        </div>

        <div className='w-2/6'>
            <div className='flex flex-col mb-6'>
                <label className='text-xs mb-2'>Fullname:</label>
                <input type = 'text' className='border py-2'/>
            </div>

            <div className='flex flex-col mb-6'>
                <label className='text-xs mb-2'>Email:</label>
                <input type = 'text' className='border py-2'/>
            </div>

            <div className='flex flex-col mb-6'>
                <label className='text-xs mb-2'>Password:</label>
                <input type = 'text' className='border py-2'/>
            </div>

            <div className='mb-9'>
                <p className='text-blue-400 text-sm'>Already have an account? Sign In</p>
            </div>

            <div className='mb-5'>
                <button className='py-3 bg-sky-500 text-sm w-full text-white'>Sign Up</button>
            </div>

            <div>
                <button className='py-3 bg-black text-sm w-full text-white'>Continue with Google</button>
            </div>
        </div>
    </div>
  )
}

export default SignUp