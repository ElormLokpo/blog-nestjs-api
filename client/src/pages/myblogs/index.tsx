import React, {useState, useEffect} from 'react'
import Card from '../../components/card';
import axios from '../../services/axios/axios';
import { clickCurrentBlog } from '../../services/redux/slices/currentBlogSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function MyBlogsPage() {
 
    const [bloglist, setBlogList] = useState([]);

    useEffect(()=>{
        axios.get('/blog')
        .then(res=>{
            setBlogList(res.data);
        
        });
    },[bloglist]);


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleToBlog = (i:any)=>{
      dispatch(clickCurrentBlog(i._id));
      navigate('/blog');
    }

  return (
    <div>
        <div className='mb-12'>
            <p className='font-bold text-lg mb-5'>My Blog Posts</p>

            <div className='grid grid-cols-4 gap-3 mb-2'>
              {
                bloglist.length>0?
                //bloglist.map((i:any)=><Card heading = {i.main_heading} desc = {i.description} img = {i.main_img} created= {i.createdAt}/>)
                bloglist.map((i:any)=><div onClick = {()=>handleToBlog(i)}><Card content = {i}/></div>)
                
                :<p className='text-sm mt-10'>No blogs yet..</p>
              }      
            </div>

            
        </div>
    </div>
  )
  
}

export default MyBlogsPage