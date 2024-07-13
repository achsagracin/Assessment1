import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Add from './components/Add'
import {Routes,Route} from 'react-router-dom'

function App() {
 

  return (
    <>
      <h1>Welcome to Product Display App</h1>
      <Navbar /><br/>
    <Routes>

      <Route path='/' element={<Home/>}></Route>
      <Route path='/add' element={<Add movie/>}></Route>

    </Routes>
    </>
  )
}

export default App
