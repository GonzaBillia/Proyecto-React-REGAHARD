import React , {useState, useContext} from 'react'
import "./SearchBar.css"
import SearchListContainer from '../SearchListContainer/SearchListContainer';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext'

export const SearchBar = () => {

    const {buscar} = useContext(CartContext)
    const [texto, setTexto] = useState("")

    const cambiarState = (texto) => {
        buscar(texto)
        console.log(texto)
    }

    return (
            <div className="flex justify-center items-center lg:w-80 xl:w-96">
                    <form className="relative flex w-full flex-wrap items-stretch" onSubmit={e => {
                                    e.preventDefault()
                                    cambiarState(texto)
                                    }}>
                        <input
                            type="text"
                            name='search'
                            className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-violet-600 focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-violet-600"
                            placeholder="Buscar"
                            onChange={e => setTexto(e.target.value)}/>

                        {/* <!--Search button--> */}
                            <button
                                className="flex items-center justify-center border border-transparent bg-deep-purple-500 px-6 py-2.5 text-base font-medium text-white hover:bg-violet-900 duration-200 focus:outline-none active:ring-2 focus:ring-violet-600 ease-in-out rounded-r"
                                type="submit">
                                
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5"
                                    >
                                    <path
                                        fillRule="evenodd"
                                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                        clipRule="evenodd" />
                                </svg>
                                
                            </button>
                            
                    </form>

                    
            </div>
    );
}