import React from 'react';
import Card from '../../components/card';


const HomePage = ()=> {

    let backgroundImg:string =  "https://images.unsplash.com/photo-1679499065391-00d02902d1eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    let cardImg: string = "https://images.unsplash.com/photo-1679047108999-9403948c0f76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80";
    let sectionImg: string = "https://images.unsplash.com/photo-1672243776760-67aec979f591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
  
  return (
    <div>


        <div className='header-section mb-44' style = {{
            backgroundImage: `url(${backgroundImg})`
          }}>
          
          <div className='wrapper flex items-end'>
            
            <div className='flex flex-col text-white p-5 mb-16'>
                <div className='inline-flex gap-1 text-xs font-light'>
                  <p className=''>31st March 2023</p>
                  <p>.</p>
                  <p>Josh Oteng</p>
                </div>

                <p className='text-2xl font-semibold mb-1 tracking-tighter'>Some Really Big Text Apparently</p>
                <p className='text-sm'>Borem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          
          </div>
        </div>

        <div className='mb-12'>
            <p className='font-bold text-lg mb-5'>Blog Posts</p>

            <div className='grid grid-cols-4 gap-3 mb-2'>
              {
                [1,2,3,4].map(()=><Card />)
              }      
            </div>

            <div className='grid grid-cols-4 gap-3'>
              {
                [1,2,3,4].map(()=><Card />)
              }      
            </div>
        </div>

        <div className='mb-20'>
            <div className='flex'>
              <div className='mb-3 '>
                  <img src = {sectionImg} className = ''/>
              </div> 


              <div className='bg-white flex mx-20'>
                  <div className='flex flex-col mb-16'>
                      <div className='inline-flex gap-1 text-xs font-light'>
                          <p className=''>31st March 2023</p>
                          <p>.</p>
                          <p>Josh Oteng</p>
                      </div>

                      <p className='text-md font-semibold mb-1 tracking-tighter'>Some Really Big Text Apparently</p>
                      <p className='text-sm leading-6 mb-2'>Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                      <p className='text-sm leading-6 mb-2'>Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>

                  </div>
              </div>
          </div>
        </div>

        <div>
            <div className='flex'>
            
              <div className='bg-white flex mx-20'>
                  <div className='flex flex-col mb-16'>
                      <div className='inline-flex gap-1 text-xs font-light'>
                          <p className=''>31st March 2023</p>
                          <p>.</p>
                          <p>Josh Oteng</p>
                      </div>

                      <p className='text-md font-semibold mb-1 tracking-tighter'>Some Really Big Text Apparently</p>
                      <p className='text-sm leading-6 mb-2'>Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                      <p className='text-sm leading-6 mb-2'>Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                     
                  </div>
              </div>

              <div className='mb-3 '>
                  <img src = {sectionImg} className = ''/>
              </div> 

          </div>
        </div>

   

    </div>
  )
}

export default HomePage;