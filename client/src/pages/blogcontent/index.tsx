import React, {useState} from 'react';
import axios from '../../services/axios/axios'

interface CurrentI{
  pos?: number,
  type: any, 
  value: any
}

function AddBlogContent() {
    const [contentType, setContentType] = useState('paragraph')
    const [currentState, setCurrentState] = useState<CurrentI>({pos:0, type:'', value:'' });
    const [counter, setCounter] = useState(0);
    const [showContent, setShowContent] = useState<boolean>(false);
    const [showCreateBlog, setShowCreateBlog] = useState<boolean>(true);
    const [description, setDescription] = useState<string>();
    const [mainHeading, setMainHeading] = useState<string>();
    // const [mainHeading, setMainHeading] = useState<string>('');
    // const [paragraph, setParagraph] = useState<string>('');


    let backgroundImg:string =  "https://images.unsplash.com/photo-1679499065391-00d02902d1eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"

    let renderContent;


    const handleTextChange = (e:React.ChangeEvent<HTMLTextAreaElement>)=>{
        setCurrentState({type: contentType, value: e.target.value});
        
    }


    switch (contentType){
      case 'sub-heading':
      case 'paragraph':
      case 'main-heading':
        renderContent = (
          <textarea className='border px-2 py-1 text-sm' rows = {7} onChange = {handleTextChange} ></textarea>
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

    const handleSubmit = ()=>{
        setCounter(counter+1);
        currentState.pos = counter;
        console.log('CURRENT STATE', currentState);
    }

    const handleStartBlog = ()=>{
        axios.post('/blog/add', {
           main_heading: mainHeading,
           author : 'Sample Author 1',
           main_img: 'Skrrrrr',
           content : [],
           description
        })
        .then(res=>{
          console.log(res.data);
          setShowContent(true);
          setShowCreateBlog(false);
        })
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

      {
        showCreateBlog?
      <div className='mb-6'> 
        <p className='font-bold text-lg mb-5'>Main Heading</p>
        
        <div className='flex flex-col mb-6'>
          <label className='text-xs mb-2'>Main Heading:</label>
          <input type = 'text' className='py-2 px-1 text-sm border' onChange={e=>setMainHeading(e.target.value)}/>
        </div>

        <div className='flex flex-col mb-6'>
          <label className='text-xs mb-2'>Brief Blog Description:</label>
          <textarea className='py-2 px-1 text-sm border' rows = {7} onChange={(e)=>setDescription(e.target.value)}> </textarea>
        </div>

        <div className='flex justify-end'>
            <button className='text-sm bg-black text-white px-5 py-2' onClick = {handleStartBlog}>Start Blog</button>
        </div>
      </div>: <p></p>
      }

      <div>
        {
          showContent?
          <div>
          <p className='font-bold text-lg mb-5'>Add Content (In the order in you want them to show on your blog page)</p>

          <div>

            <div className='flex flex-col mb-6'>
              <label className='text-xs mb-2'>Type:</label>
              <select className='text-sm px-6 py-2 border' onChange={handleChange}>
                  <option className='py-2' value = 'sub-heading'>Sub Heading</option>
                  <option className='py-2' value = 'paragraph'>Paragraph</option>
                  <option className='py-2' value = 'main-img'>Main Image</option>
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
                <button className='text-sm bg-black text-white px-10 py-2' onClick = {handleSubmit}>Add</button>
            </div>
          </div> </div>
          : <p> </p>

        }
          

      </div>




</div>
    </>
  )
}

export default AddBlogContent;