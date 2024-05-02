/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import {NavLink} from 'react-router-dom'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const NavBar = () => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    return (

        <Disclosure as="nav" className="w-full bg-white z-40 fixed drop-shadow-md">
        {({ open }) => (
            <>
            <div className="mx-auto max-w-full px-2 md:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between grid lg:grid-cols-12 grid-cols-3 grid-rows-1">
                    <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                        {/* Mobile menu button*/}
                        <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Abrir Menu</span>
                        {open ? (
                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                        )}
                        </Disclosure.Button>
                    </div>
                    <div className="flex flex-shrink-0 items-center justify-center  lg:justify-center lg:col-span-3 col-span-8">
                            <NavLink to={`/Proyecto-React-REGAHARD/`}>
                                <img className='h-4 w-auto' src="https://firebasestorage.googleapis.com/v0/b/proyecto-final-react-cod-c21ca.appspot.com/o/Regahard.png?alt=media&token=733069e8-3744-4ae2-81f1-9f78b8b1d0ce" alt="logo" />
                            </NavLink>
                        </div>
                    <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-center col-span-6">
                            <div className="flex items-center justify-center hidden lg:ml-6 lg:block">
                                <ul className="flex space-x-7 items-center justify-center">
                                    <li className= {classNames(
                                        'text-black hover:bg-gray-400 hover:text-white',
                                        'rounded-md px-3 py-2 text-sm font-medium'
                                        )}>
                                        <NavLink to={`/`}>
                                            Inicio
                                        </NavLink>
                                    </li>
                                    <li className= {classNames(
                                        'text-black hover:bg-gray-400 hover:text-white',
                                        'rounded-md px-3 py-2 text-sm font-medium'
                                        )}>
                                        <NavLink to={`categoria/Microprocesador`}>
                                            Procesadores
                                        </NavLink>
                                    </li>
                                    <li className= {classNames(
                                        'text-black hover:bg-gray-400 hover:text-white',
                                        'rounded-md px-3 py-2 text-sm font-medium'
                                        )}>
                                        <NavLink to={`categoria/Placa Madre`}>
                                            Placas Madre
                                        </NavLink>
                                    </li>
                                    <li className= {classNames(
                                        'text-black hover:bg-gray-400 hover:text-white',
                                        'rounded-md px-3 py-2 text-sm font-medium'
                                        )}>
                                        <NavLink to={`categoria/Disco`}>
                                            Discos SSD
                                        </NavLink>
                                    </li>
                                    <li className= {classNames(
                                        'text-black hover:bg-gray-400 hover:text-white',
                                        'rounded-md px-3 py-2 text-sm font-medium'
                                        )}>
                                        <NavLink to={`categoria/Memoria Ram`}>
                                            Memorias Ram
                                        </NavLink>
                                    </li>
                                    <li className= {classNames(
                                        'text-black hover:bg-gray-400 hover:text-white',
                                        'rounded-md px-3 py-2 text-sm font-medium'
                                        )}>
                                        <NavLink to={`categoria/Fuente`}>
                                            Fuentes
                                        </NavLink>
                                    </li>
                                    <li className= {classNames(
                                        'text-black hover:bg-gray-400 hover:text-white',
                                        'rounded-md px-3 py-2 text-sm font-medium'
                                        )}>
                                        <NavLink to={`categoria/Gabinete`}>
                                            Gabinetes
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                    </div>
                    <div className='cartWidget absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0 col-span-3'>
                        <CartWidget/>
                    </div>
                </div>
            </div>

            <Disclosure.Panel className="lg:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                {<Disclosure.Button>
                    <ul className='ulColumn'>
                    
                    <li className= {classNames(
                        'text-black hover:bg-gray-400 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                        )}>
                        <NavLink to={`/Proyecto-React-REGAHARD/`}>
                            Inicio
                        </NavLink>
                    </li>
                    
                    <li className= {classNames(
                        'text-black hover:bg-gray-400 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                        )}>
                        <NavLink to={`/Proyecto-React-REGAHARD/categoria/Microprocesador`}>
                            Procesadores
                        </NavLink>
                    </li>
                    
                    <li className= {classNames(
                        'text-black hover:bg-gray-400 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                        )}>
                        <NavLink to={`/Proyecto-React-REGAHARD/categoria/Placa Madre`}>
                            Placas Madre
                        </NavLink>
                    </li>
                    
                    <li className= {classNames(
                        'text-black hover:bg-gray-400 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                        )}>
                        <NavLink to={`/Proyecto-React-REGAHARD/categoria/Disco`}>
                            Discos SSD
                        </NavLink>
                    </li>
                    
                    <li className= {classNames(
                        'text-black hover:bg-gray-400 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                        )}>
                        <NavLink to={`/Proyecto-React-REGAHARD/categoria/Memoria Ram`}>
                            Memorias Ram
                        </NavLink>
                    </li>
                    
                    
                    <li className= {classNames(
                        'text-black hover:bg-gray-400 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                        )}>
                        <NavLink to={`/Proyecto-React-REGAHARD/categoria/Fuente`}>
                            Fuentes
                        </NavLink>
                    </li>
                    
                    
                    <li className= {classNames(
                        'text-black hover:bg-gray-400 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                        )}>
                        <NavLink to={`/Proyecto-React-REGAHARD/categoria/Gabinete`}>
                            Gabinetes
                        </NavLink>
                    </li>
                    
                </ul>
                </Disclosure.Button>}
                </div>
            </Disclosure.Panel>
            </>
        )}
        </Disclosure>
    )
}

export default NavBar