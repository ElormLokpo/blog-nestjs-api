import React, {useState, useEffect} from 'react'
import Card from '../../components/card';
import axios from '../../services/axios/axios';

function BlogList() {
    const [bloglist, setBlogList] = useState([]);

    useEffect(()=>{
        axios.get('/blog')
        .then(res=>{
            setBlogList(res.data);
            console.log(bloglist);
        });
    },[bloglist]);
  return (
    <div>
        <div className='mb-12'>
            <p className='font-bold text-lg mb-5'>Blog Posts</p>

            <div className='grid grid-cols-4 gap-3 mb-2'>
              {
                bloglist.length>0?
                //bloglist.map((i:any)=><Card heading = {i.main_heading} desc = {i.description} img = {i.main_img} created= {i.createdAt}/>)
                bloglist.map((i:any)=><Card content = {i}/>)
                
                :<p className='text-sm mt-10'>No blogs yet..</p>
              }      
            </div>

            
        </div>
    </div>
  )
}

export default BlogList