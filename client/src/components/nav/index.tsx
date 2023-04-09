import React from 'react'
import { NavLink } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { storeToken, storeUserData } from '../../services/redux/slices/currentUserSlice';

function Nav() {


  let currentUser  = useSelector((state:any)=>state.currentUserS.value.userData);
  const dispatch = useDispatch();

  let renderAuthLinks;

  let handleSignOut = ()=>{
      dispatch(storeToken(null));
      dispatch(storeUserData(null));
  }

  if (currentUser == null){
    renderAuthLinks = (
      <>
      <NavLink to = '/signup' className="hover:underline">Sign Up</NavLink>
      <NavLink to = '/signin' className="hover:underline">Sign In</NavLink>
      </>
    )
  }else if(currentUser){
    renderAuthLinks = (
      <>
       <NavLink to = 'myblogs'className="hover:underline">My Blogs</NavLink>
       <NavLink to = '/signup' className="hover:underline">Profile</NavLink>
       <button onClick={handleSignOut}>Sign Out</button>
      
      </>
    )
  }

  return (
    <>
        <div className='border-y mb-20 py-2 flex items-center justify-center'>
           <div className='text-sm inline-flex gap-2'>
              <NavLink to = ''className="hover:underline">Home</NavLink>
              <NavLink to = 'add'className="hover:underline">Write Blog</NavLink>
              <NavLink to = 'blogs'className="hover:underline"> All Blogs </NavLink>
              
              {renderAuthLinks }
             

           </div>
        </div>
    </>
  )
}

export default Nav