import React, {useState, useEffect} from 'react';
import axios from '../../../services/axios/axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { storeUserData, storeToken } from '../../../services/redux/slices/currentUserSlice';
import {ToastContainer, toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Link } from 'react-router-dom';

function SignIn() {

    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();
   ;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = ()=>{
        axios.post('/auth/login', {username, password})
        .then(res=>{
            console.log('FROM BACK',res.data);
            dispatch(storeToken(res.data.token));
            dispatch(storeUserData(res.data.user));
            toast.success('Welcome back!',{
                position: toast.POSITION.TOP_CENTER
            });
            navigate('/')
        }).catch(err=>{
            toast.error('Wrong Credentials',{
                position: toast.POSITION.TOP_CENTER
            });
        })

        
       
    }

  
   
  return (
    <div className='flex flex-col items-center justify-center h-full'>
         <ToastContainer />
        <div className='flex justify-center mb-7'>
            <p className='text-3xl font-semibold mb-2 tracking-tighter'>Welcome Back</p>
        </div>

       

        <div className='w-2/6'>
         

            <div className='flex flex-col mb-6'>
                <label className='text-xs mb-2'>Email:</label>
                <input type = 'text' className='border py-2 px-1' onChange = {e=>setUsername(e.target.value)}/>
            </div>

            <div className='flex flex-col mb-6'>
                <label className='text-xs mb-2'>Password:</label>
                <input type = 'password' className='border py-2 px-1' onChange = {e=>setPassword(e.target.value)}/>
            </div>

            <div className='mb-9'>
                <Link className='text-blue-600 underline text-sm' to='/signup'>Don't have an account? Sign Up</Link>
            </div>

            <div className='mb-5'>
                <button className='py-3 bg-sky-500 text-sm w-full text-white' onClick={handleSubmit}>Sign In</button>
            </div>

            <div>
                <button className='py-3 bg-black text-sm w-full text-white'>Continue with Google</button>
            </div>
        </div>
    </div>
  )
}

export default SignIn