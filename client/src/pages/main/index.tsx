import React from 'react'
import Footer from '../../components/footer'
import TopSection from '../../components/topsection';
import { Outlet } from 'react-router-dom';

function Main() {
  return (
    <>
      <TopSection />
        <Outlet />
      <Footer />
    </>
    
  )
}

export default Main