/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return (


        <div className='container'>
        
        <div className='logo'>
            <NavLink to={`/`}>
                <img className='logoImg' src="/src/assets/media/imagenes/logo/Regahard.png" alt="logo" />
            </NavLink>
        </div>
        

        <div>
            <ul>

                <li>
                    <NavLink to={`/`}>
                        Inicio
                    </NavLink>
                </li>

                <li>
                    <NavLink to={`categoria/Microprocesador`}>
                        Procesadores
                    </NavLink>
                </li>

                <li>
                    <NavLink to={`categoria/Placa Madre`}>
                        Placas Madre
                    </NavLink>
                </li>

                <li>
                    <NavLink to={`categoria/Disco`}>
                        Discos SSD
                    </NavLink>
                </li>

                <li>
                    <NavLink to={`categoria/Memoria Ram`}>
                        Memorias Ram
                    </NavLink>
                </li>

                <li>
                    <NavLink to={`categoria/Fuente`}>
                        Fuentes
                    </NavLink>
                </li>

                <li>
                    <NavLink to={`categoria/Gabinete`}>
                        Gabinetes
                    </NavLink>
                </li>
            </ul>
        </div>
        
        
        <div className='cartWidget'>
            <CartWidget/>
        </div>
        

        </div>


    )
}

export default NavBar