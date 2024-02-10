/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {


  return (
    <>
      <BrowserRouter>


      <NavBar/>

      <Routes>

        <Route path='/' element={<ItemListContainer/>}/>

        <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>

      </Routes>


      </BrowserRouter>
    </>
  )
}

export default App
