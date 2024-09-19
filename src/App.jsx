import React from 'react'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Cards from './Components/Cards';
import Testimonals from './Components/Testimonals';
import Form from './Components/Form';
import Footer from './Components/Footer';


const App = () => {
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <About></About>
    <Cards></Cards>
    <Testimonals></Testimonals>
    <Form></Form>
    <Footer></Footer>
    </>
  )
}

export default App