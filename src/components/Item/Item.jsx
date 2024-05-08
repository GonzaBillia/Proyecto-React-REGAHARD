import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({producto, agregarSolo}) => {

    const agregarAlCarrito = () =>{
        producto.cantidad = 1
        agregarSolo(producto)
        
    }

    return (
        <div className='card w-72 shadow-md rounded-md' key={producto.id}>
            <Link to={`/Proyecto-React-REGAHARD/descripcion/${producto.id}`}>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white lg:aspect-none hover:scale-105 duration-300 lg:h-80">
                    <img
                    src={producto.img}
                    alt={producto.alt}
                    className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                    />
                </div>
            </Link>
                <div className="mt-4 pl-2 pr-2 flex justify-between w-72">
                    <div className='w-52'>
                        <Link to={`/Proyecto-React-REGAHARD/descripcion/${producto.id}`}>
                            <h3 className="text-lg text-gray-700 truncate capitalize">
                                <span aria-hidden="true">
                                {producto.marca} </span>
                                <span aria-hidden="true">
                                {" "}{producto.modelo} </span>
                            </h3>
                        </Link>
                        <Link to={`/Proyecto-React-REGAHARD/categoria/${producto.tipoItem}`}>
                            <p className="mt-1 text-sm text-gray-500">{producto.tipoItem}</p>
                        </Link>
                    </div>
                    <p className="text-lg font-medium text-gray-900">${producto.precio}</p>
                </div>
            
            <div className='accionStock'>
                {producto.stock == 0 ? <p className='mt-2 px-8 py-3 text-md text-gray-500'>No hay Stock</p> : <button className='mt-2 flex items-center justify-center border border-transparent bg-deep-purple-500 px-8 py-3 text-base font-medium text-white hover:bg-deep-purple-900 duration-200 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 w-72 rounded-b-md' onClick={agregarAlCarrito}>Agregar al Carrito</button>}
            </div>
        </div>
    )
}

export default Item