import React, {useState} from 'react';
import axios from '../../services/axios/axios';
import { storeCurrentBlog } from '../../services/redux/slices/currentBlogSlice';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';

interface CurrentI{
  pos?: number,
  type: any, 
  value: any,
  blog?: any
}

function AddBlogContent() {
    const [contentType, setContentType] = useState('sub-heading')
    const [currentState, setCurrentState] = useState<CurrentI>({pos:0, type:'', value:'', blog: '' });
    const [counter, setCounter] = useState(0);
    const [showContent, setShowContent] = useState<boolean>(false);
    const [showCreateBlog, setShowCreateBlog] = useState<boolean>(true);
    const [description, setDescription] = useState<string>('Describe your blog in a few words');
    const [mainHeading, setMainHeading] = useState<string>('Main Heading');
    const [renderBlogContent, setRenderBlogContent] = useState<any[]>([]);
    const [imgUs, setImgUs] = useState('');
    const [mainImg, setMainImg] = useState('https://images.unsplash.com/photo-1679499065391-00d02902d1eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80');
    
    //const [mainImg, setMainImg] = useState('https://images.unsplash.com/photo-1679499065391-00d02902d1eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80');
    // const [mainHeading, setMainHeading] = useState<string>('');
    // const [paragraph, setParagraph] = useState<string>('');

    const dispatch = useDispatch();

    let renderContent;

    const handleTextChange = (e:React.ChangeEvent<HTMLTextAreaElement>)=>{
        setCurrentState({type: contentType, value: e.target.value});
        
    }

    const handleImgChagne = ()=>{
        let formData = new FormData();
        formData.append('file', imgUs);
        formData.append('upload_preset', 'blognest');
        formData.append('cloud_name', 'dohgv0wsx');
        console.log(imgUs);


        fetch('https://api.cloudinary.com/v1_1/dohgv0wsx/image/upload',{
          method: 'post',
          body: formData
        })
        .then(res=> res.json())
        .then(data =>{
          console.log(data.url);
          setCurrentState({type: contentType, value: data.url});
        })
     
    }

    switch (contentType){
      case 'sub-heading':
      case 'paragraph':
        renderContent = (
          <textarea className='border px-2 py-1 text-sm' rows = {7} onChange = {handleTextChange} ></textarea>
        )
        break;
    
      case 'img':
        renderContent = (
          <div>
            <input type='file' className='text-xs' onChange = {(e:any)=>setImgUs(e.target.files[0])}/> <button className='bg-black text-sm text-white py-1 px-3' onClick={handleImgChagne}> + </button>

          </div>
        )

      
    }
    
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>)=>{
      setContentType(e.target.value);
    }

    let currentBlog = useSelector((state:any)=>state.currentBlogS.value.currentBlog);
    let currentToken = useSelector((state:any)=>state.currentUserS.value.token);

   
    const handleAddContent = ()=>{
        setCounter(counter+1);
        currentState.pos = counter;
        currentState.blog = currentBlog;
        console.log('CURRENT STATE', currentState);

        axios.post('/content/add', currentState,{
          headers:{
            Authorization: `Bearer ${currentToken}`
          }})
        .then(res=>{
          console.log(res.data);
          setRenderBlogContent([...renderBlogContent, res.data]);
        
        })
    }

    const handleStartBlog = ()=>{

      let formData = new FormData();
      formData.append('file', imgUs);
      formData.append('upload_preset', 'blognest');
      formData.append('cloud_name', 'dohgv0wsx');
      console.log(imgUs);


      fetch('https://api.cloudinary.com/v1_1/dohgv0wsx/image/upload',{
        method: 'post',
        body: formData
      })
      .then(res=> res.json())
      .then(data =>{
        console.log(data.url);
        setMainImg(data.url);
      })


        axios.post('/blog/add', {
           main_heading: mainHeading,
           author : 'Sample Author 1',
           main_img: mainImg,
           content : [],
           description
        },{
          headers:{
            Authorization: `Bearer ${currentToken}`
          }
        })
        .then(res=>{
          console.log(res.data._id);
          dispatch(storeCurrentBlog(res.data._id));
          setShowContent(true);
          setShowCreateBlog(false);
        })
    }

 
   let renderContentData;

   if (renderBlogContent.length> 0){
      renderContentData = renderBlogContent.map(i=>{
        if (i.type == 'paragraph'){
            return <p className='text-sm mb-10 leading-7'>{i.value}</p>
        } else if(i.type =='sub-heading'){
            return <p className='font-semibold text-lg mb-3'>{i.value}</p>
        } else if(i.type == 'img'){
          return <img src = {i.value} className = 'card-img'/>
        }
      })
   }else {
    renderContentData = <p>No Content yet...</p>
   }
    

  
  return (
    <>
    <div>
       

      <div className='header-section mb-24' style = {{
          backgroundImage: `url(${mainImg})`
        }}>
        
        <div className='wrapper flex items-end'>
          
          <div className='flex flex-col text-white p-5 mb-16'>
              <div className='inline-flex gap-1 text-xs font-light'>
                <p className=''>Date Today</p>
                <p>.</p>
                <p>Josh Oteng</p>
              </div>

              <p className='text-2xl font-semibold mb-1 tracking-tighter'>{mainHeading}</p>
              <p className='text-sm'>{description}</p>
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

        <div className='flex flex-col mb-6'>
          <label className='text-xs mb-2'>Main blog image:</label>
          <input type='file' className='text-xs' onChange = {(e:any)=>setImgUs(e.target.files[0])}/> 
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
            <div className='mb-5'>
                {renderContentData}
            </div>

            <p className='font-bold text-lg mb-5'>Add Content (In the order in you want them to show on your blog page)</p>

            <div>

              <div className='flex flex-col mb-6'>
                <label className='text-xs mb-2'>Type:</label>
                <select className='text-sm px-6 py-2 border' onChange={handleChange}>
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
                  <button className='text-sm bg-black text-white px-10 py-2' onClick = {handleAddContent}>Add</button>
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