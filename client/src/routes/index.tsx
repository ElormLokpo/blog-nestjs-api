import React from 'react';
import SignIn from '../pages/auth/signin';
import SignUp from '../pages/auth/signup';
import HomePage from '../pages/homepage';
import BlogPage from '../pages/blogpage';
import AddBlogContent from '../pages/blogcontent';
import Main from '../pages/main';

import { BrowserRouter ,Route, Routes} from 'react-router-dom';
import BlogList from '../pages/bloglist';



function MainRoute() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element = {<SignUp />} path = 'signup'/>
            <Route element = {<SignIn />} path = 'signin'/>
            <Route element = {<Main />} path='main'>
              <Route element = {<HomePage />} path = '' index/>
              <Route element = {<BlogPage />} path = 'blog'/>
              <Route element = {<AddBlogContent />} path = 'add'/>
              <Route element = {<BlogList />} path = 'blogs' />
            </Route>
           

        </Routes>
  </BrowserRouter>
  )
}

export default MainRoute