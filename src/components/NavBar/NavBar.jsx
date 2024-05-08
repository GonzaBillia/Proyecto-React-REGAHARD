/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import {NavLink} from 'react-router-dom'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { SearchBar } from '../SearchBar/SearchBar'
import { BurgerMenu } from '../BurgerMenu/BurgerMenu'

const NavBar = () => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    return (

        <div className="w-full bg-white z-50 fixed drop-shadow-md">
            <div className="mx-auto px-0 max-w-full">
                <div className="relative h-20 items-center justify-between grid lg:grid-cols-12 grid-cols-3 grid-rows-1">
                    <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                        {/* Mobile menu button*/}
                        <BurgerMenu/>
                    </div>
                    <div className="flex flex-shrink-0 items-center justify-center  lg:justify-center lg:col-start-2 xl:col-start-3 lg:col-span-2 col-span-8">
                            <NavLink to={`/Proyecto-React-REGAHARD/`}>
                                <img className='h-4 w-auto' src="https://firebasestorage.googleapis.com/v0/b/proyecto-final-react-cod-c21ca.appspot.com/o/Regahard.png?alt=media&token=733069e8-3744-4ae2-81f1-9f78b8b1d0ce" alt="logo" />
                            </NavLink>
                        </div>
                    <div className="lg:flex hidden flex-1 items-center justify-center lg:items-stretch lg:justify-center lg:col-start-5 col-span-4">
                        <SearchBar/>
                    </div>
                    <div className='cartWidget mr-2 absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:col-start-11 xl:col-start-10 lg:ml-6 lg:pr-0 col-span-1'>
                        <CartWidget/>
                    </div>
                </div>
                <div className="relative h-12 bg-deep-purple-500 mx-0 items-center hidden justify-between lg:grid lg:grid-cols-1 grid-cols-1 grid-rows-1">
                    <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-center col-span-6">
                            <div className="flex items-center justify-center lg:ml-6 lg:block">
                                <ul className="flex space-x-7 items-center justify-center">
                                    <li className= {classNames(
                                        'text-white hover:text-black duration-200',
                                        'rounded-md px-3 py-2 text-sm font-medium'
                                        )}>
                                        <NavLink to={`/Proyecto-React-REGAHARD/`}>
                                            Inicio
                                        </NavLink>
                                    </li>
                                    <li className= {classNames(
                                        'text-white hover:text-black duration-200',
                                        'rounded-md px-3 py-2 text-sm font-medium'
                                        )}>
                                        <NavLink to={`/Proyecto-React-REGAHARD/categoria/Microprocesador`}>
                                            Procesadores
                                        </NavLink>
                                    </li>
                                    <li className= {classNames(
                                        'text-white hover:text-black duration-200',
                                        'rounded-md px-3 py-2 text-sm font-medium'
                                        )}>
                                        <NavLink to={`/Proyecto-React-REGAHARD/categoria/Placa Madre`}>
                                            Placas Madre
                                        </NavLink>
                                    </li>
                                    <li className= {classNames(
                                        'text-white hover:text-black duration-200',
                                        'rounded-md px-3 py-2 text-sm font-medium'
                                        )}>
                                        <NavLink to={`/Proyecto-React-REGAHARD/categoria/Disco`}>
                                            Discos SSD
                                        </NavLink>
                                    </li>
                                    <li className= {classNames(
                                        'text-white hover:text-black duration-200',
                                        'rounded-md px-3 py-2 text-sm font-medium'
                                        )}>
                                        <NavLink to={`/Proyecto-React-REGAHARD/categoria/Memoria Ram`}>
                                            Memorias Ram
                                        </NavLink>
                                    </li>
                                    <li className= {classNames(
                                        'text-white hover:text-black duration-200',
                                        'rounded-md px-3 py-2 text-sm font-medium'
                                        )}>
                                        <NavLink to={`/Proyecto-React-REGAHARD/categoria/Fuente`}>
                                            Fuentes
                                        </NavLink>
                                    </li>
                                    <li className= {classNames(
                                        'text-white hover:text-black duration-200',
                                        'rounded-md px-3 py-2 text-sm font-medium'
                                        )}>
                                        <NavLink to={`/Proyecto-React-REGAHARD/categoria/Gabinete`}>
                                            Gabinetes
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar