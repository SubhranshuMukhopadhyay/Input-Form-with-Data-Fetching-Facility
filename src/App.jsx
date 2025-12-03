import {Route, Routes} from 'react-router'
import './App.css'
import Home from './Components/Home'
import RProductionForm from './Components/R Production Form'
import SProductionForm from './Components/S Production Form'
import NotFound from './Components/NotFound'
import React from 'react'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='rproductionform' element={<RProductionForm/>}/>
        <Route path='sproductionform' element={<SProductionForm/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
