import React from 'react'

function Card() {
    let cardImg: string = "https://images.unsplash.com/photo-1679047108999-9403948c0f76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80";

  return (
    <div className='flex flex-col'>
        <div className='mb-3 card-img-container'>
            <img src = {cardImg} className = 'card-img'/>
        </div> 


        <div className='bg-white py-5'>
            <div className='flex flex-col mb-16'>
                <div className='inline-flex gap-1 text-xs font-light'>
                    <p className=''>31st March 2023</p>
                    <p>.</p>
                    <p>Josh Oteng</p>
                </div>

                <p className='text-md font-semibold mb-1 tracking-tighter'>Some Really Big Text Apparently</p>
                <p className='text-sm leading-6'>Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            </div>
        </div>
    </div>
  )
}

export default Card