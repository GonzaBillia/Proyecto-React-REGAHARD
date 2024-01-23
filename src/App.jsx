/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {


  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos a mi Ecommerce"}/>
    </>
  )
}

export default App
