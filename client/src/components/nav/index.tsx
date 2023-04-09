import React from 'react'
import { NavLink } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

function Nav() {


  let currentUser  = useSelector((state:any)=>state.currentUserS.value.userData);
  console.log('CURRENT USER', currentUser);

  let renderAuthLinks;

  if (currentUser == null){
    renderAuthLinks = (
      <>
      <NavLink to = '/signup' >Sign Up</NavLink>
      <NavLink to = '/signin' >Sign In</NavLink>
      </>
    )
  }else if(currentUser){
    renderAuthLinks = (
      <>
       <NavLink to = 'myblogs'>My Blogs</NavLink>
       <NavLink to = '/signup' >Profile</NavLink>
       <NavLink to = '/signin' >Sign Out</NavLink>
      
      </>
    )
  }

  return (
    <>
        <div className='border-y mb-20 py-2 flex items-center justify-center'>
           <div className='text-sm inline-flex gap-2'>
              <NavLink to = ''>Home</NavLink>
              <NavLink to = 'add'>Write Blog</NavLink>
              <NavLink to = 'blogs'> All Blogs </NavLink>
              
              {renderAuthLinks }
             

           </div>
        </div>
    </>
  )
}

export default Nav