import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousal from '../components/Carousal'
function Home() {
  return (
  <> 
   <div><Header/></div>
   <div><Carousal/></div>
    <div className='m-3'><Card/>
    <Card/>
    <Card/>
    <Card/>
    </div>
   <div><Footer/></div>
   </>
  )
}

export default Home