import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import Main from './components/Main'
import FoodItem from './components/FoodItem.'
import Footer from "./components/Footer"
import './App.css'

function App() {
  

  return (
    <>

  <Navbar/>
  <Main text="Experience bold flavors crafted from premium ingredients From crispy burgers to gourmet pizzas - every bit is an adventure woeth savoring"/>
<FoodItem/>
 <Footer/>
     </>
  )
}

export default App
