import { useState } from 'react'
import './App.css'
import Hero from './Hero'
import Header from './Header'
import About from './About'
import Programs from './Programs'
import Impact from './Impact'
import Get from './Get'
import Events from './Events'
import Blog from './Blog'
import Contact from './Contact'
import Footer from './Footer'


function App() {
  return(
    <>
    <Header/>
    <Hero/>
     <Impact/>
    {/* <About/>  */}
    <Programs/>
     {/* <Get/> */}
     <Events/>
     <Blog/>
     {/* <Contact/> */}
     <Footer/>
    </>
  )
}

export default App
