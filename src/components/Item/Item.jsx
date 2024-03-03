import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({producto, agregarSolo}) => {

    const agregarAlCarrito = () =>{
        producto.cantidad = 1
        agregarSolo(producto)
        
    }

    return (
        <div className='card' key={producto.id}>
            <Link to={`/descripcion/${producto.id}`}>
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                src={producto.img}
                alt={producto.alt}
                className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                <h3 className="text-sm text-gray-700">
                    <span aria-hidden="true">
                    {producto.marca} </span>
                    <span aria-hidden="true">
                    {" "}{producto.modelo} </span>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{producto.tipoItem}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${producto.precio}</p>
            </div>
            </Link>
            <div className='accionStock'>
                {producto.stock == 0 ? <p className='mt-8 mb-2 text-xl'>No hay Stock</p> : <button className='mt-5 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2' onClick={agregarAlCarrito}>Agregar al Carrito</button>}
            </div>
        </div>
    )
}

export default Item