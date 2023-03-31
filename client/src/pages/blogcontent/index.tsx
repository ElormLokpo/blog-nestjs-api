import React, {useState} from 'react';

function AddBlogContent() {
    const [contentType, setContentType] = useState<string>('main-img')

    let backgroundImg:string =  "https://images.unsplash.com/photo-1679499065391-00d02902d1eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"

    let renderContent;
    
    switch (contentType){
      case 'sub-heading':
      case 'paragraph':
      case 'main-heading':
        renderContent = (
          <textarea className='border px-2 py-1 text-sm' rows = {7}></textarea>
        )
        break;
      case 'main-img':
      case 'img':
        renderContent = (
           <input type='file' className='text-sm'/>
        )

      
    }
    
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>)=>{
      setContentType(e.target.value);
    }
   
  return (
    <>
    <div>
       

      <div className='header-section mb-24' style = {{
          backgroundImage: `url(${backgroundImg})`
        }}>
        
        <div className='wrapper flex items-end'>
          
          <div className='flex flex-col text-white p-5 mb-16'>
              <div className='inline-flex gap-1 text-xs font-light'>
                <p className=''>Date Today</p>
                <p>.</p>
                <p>Josh Oteng</p>
              </div>

              <p className='text-2xl font-semibold mb-1 tracking-tighter'>Main Blog Title</p>
              <p className='text-sm'>Blog Decription.</p>
          </div>
        
        </div>
      </div>

<div>
    <p className='font-bold text-lg mb-5'>Add Content</p>

    <div>

      <div className='flex flex-col mb-6'>
        <label className='text-xs mb-2'>Type:</label>
        <select className='text-sm px-6 py-2 border' onChange={handleChange}>
            <option className='py-2' value = 'main-heading'>Main Heading</option>
            <option className='py-2' value = 'main-img'>Main Image</option>
            <option className='py-2' value = 'sub-heading'>Sub Heading</option>
            <option className='py-2' value = 'paragraph'>Paragraph</option>
            <option className='py-2' value = 'img'>Image</option>
            <option className='py-2' value = ''>List</option>
        </select>
      </div>

      <div className='mb-6'>
        <div className='flex flex-col'>
          <label className='text-xs mb-3'>Content:</label>

          { renderContent }
         
        </div>
      </div>

      <div className='flex justify-end'>
          <button className='text-sm bg-black text-white px-10 py-2' >Add</button>
      </div>
    </div>

   
    

</div>




</div>
    </>
  )
}

export default AddBlogContent;