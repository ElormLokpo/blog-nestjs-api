import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import axios from '../../services/axios/axios';
import { AiFillEdit } from 'react-icons/ai';


function UpdateBlog() {
  const [blogData, setBlogData] = useState<any>(null);
    const [mainHeading, setMainHeading] = useState<any>('Main Heading');
    const [content, setContent] = useState([]);
    const [mainImg, setMainImg] = useState<string>('https://images.unsplash.com/photo-1679499065391-00d02902d1eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')
    const [description, setDescription] = useState<string>('Description');

    let backgroundImg:string =  "https://images.unsplash.com/photo-1679499065391-00d02902d1eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    let sectionImg: string = "https://images.unsplash.com/photo-1672243776760-67aec979f591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"

    let clickBlog = useSelector((state:any)=>state.currentBlogS.value.clickBlog);

    useEffect(()=>{
      axios.get(`/blog/${clickBlog}`)
      .then(res=>{
        console.log('RIGHT NOW BLOG',res.data);
        setBlogData(res.data);
        setMainHeading(res.data.main_heading);
        setContent(res.data.content);
        setMainImg(res.data.main_img);
        setDescription(res.data.description);
      })
    
    }, [])

    let renderContentData;

    if (content.length > 0){
        renderContentData = content.map((i:any)=>{
          if (i.type == 'paragraph'){
              return <div className='mb-5'> <textarea className='text-sm border w-full p-3' value = {i.value} rows={10} />  </div>
          } else if(i.type ='sub-heading'){
              return <input type = 'text' className='font-semibold mb-3 border p-2' value = {i.value} />
          }
        })
    }else {
      renderContentData = <p>No Content yet...</p>
    }


  return (
    <div>
      {
        blogData?
          <div>
            <div className='header-section mb-24' style = {{
        backgroundImage: `url(${mainImg})`
      }}>
      
      <div className='wrapper flex items-end'>
        
        <div className='flex flex-col text-white p-5 mb-16'>
            <div className='inline-flex gap-1 text-xs font-light'>
              <p className=''>31st March 2023</p>
              <p>.</p>
              <p>Josh Oteng</p>
            </div>

            <p className='text-2xl font-semibold mb-1 tracking-tighter'>{mainHeading}</p>
            <p className='text-sm'>{description}</p>
        </div>
      
      </div>
    </div>

      <div className='mb-10'>
        <button className='text-sm py-1 px-3 bg-black text-white inline-flex gap-2 items-center'> Edit Blog <AiFillEdit /> </button>
      </div>

      <div className='mb-10'>
       {renderContentData}
      </div>

      
      
        
        </div>

        :<p>No Data yet</p>
      }

    

    

</div>
  )
}

export default UpdateBlog