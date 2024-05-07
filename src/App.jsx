/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Error from './components/Error/Error'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import CartProvider from './components/context/CartContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import SearchListContainer from './components/SearchListContainer/SearchListContainer'
import MainContainer from './components/MainContainer/MainContainer'
import SearchProvider from './components/context/SearchContext'



function App() {


  return (
    <>
      <BrowserRouter>
        <CartProvider>
        <SearchProvider>


        <NavBar/>

        <Routes>

          <Route path='Proyecto-React-REGAHARD/' element={<MainContainer/>}/>

          <Route path='Proyecto-React-REGAHARD/categoria/:idCategoria' element={<ItemListContainer/>}/>

          <Route path='Proyecto-React-REGAHARD/descripcion/:id' element={<ItemDetailContainer/>}/>

          <Route path= 'Proyecto-React-REGAHARD/cart' element= {<Cart/>}/>

          <Route path= 'Proyecto-React-REGAHARD/checkout' element= {<Checkout/>}/>

          <Route path= 'Proyecto-React-REGAHARD/?search=:search' element= {<SearchListContainer/>}/>

          <Route path='*' element={<Error/>}/>

        </Routes>

        </SearchProvider>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
