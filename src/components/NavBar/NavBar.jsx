/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    return (


        <div className='container'>
        
        <h1>REGAHARD</h1>

        
        <ul>
            <li><a href="">Inicio</a></li>
            <li><a href="">Componentes de PC</a></li>
            <li><a href="">Monitores</a></li>
            <li><a href="">Notebooks</a></li>
            <li><a href="">Perifericos</a></li>
            <li><a href="">Contacto</a></li>
        </ul>
        
        <div className='cartWidget'>
            <CartWidget/>
        </div>
        

        </div>


    )
}

export default NavBar