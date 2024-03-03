import React, {useContext, useState} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import {Link} from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const ItemDetail = ({producto}) => {

    const [cart, setCart] = useState(false)

    const {agregarAlCarrito} = useContext(CartContext)

    const agregar = (count) =>{
        setCart(true)

        producto.cantidad = count

        agregarAlCarrito(producto)

        
    }


    return (
        /*<div key={producto.id} className='itemDetail'>
            <h3>Marca: {producto.marca}</h3>
            <h3>Modelo: {producto.modelo}</h3>
            <img src={producto.img} alt={producto.alt} className='cardImg'/>
            <h4>Precio: ${producto.precio}</h4>
            <p>Categoria: {producto.tipoItem}</p>

            {producto.stock == 0 
            ? 
            <p>Sin Stock</p> 
            : 
            cart ? 
            <>
                <Link to= '/cart'><button>Ir al Carrito</button></Link>
                
            </>
            : 
            <ItemCount initial={1} stock={producto.stock} agregar={agregar}/>}
            </div>*/

        <div className='container mx-auto grid grid-cols-12 grid-flow-rows p-10'>
            <div className='col-span-6 p-10'>
                <img src={producto.img} alt={producto.alt} className='w-full'/>
            </div>
            <div className='col-span-6 row-span-6 justify-start p-10'>
                <div>
                    <h4 className='text-2xl mb-6'>
                        {producto.tipoItem}
                    </h4>
                </div>
                <div className='border-b-2'>
                    <h2 className='text-6xl my-6'>
                    {producto.marca} {" "} {producto.modelo}
                    </h2>
                </div>
                <div>
                    <h3 className='text-5xl my-6'>
                        ${producto.precio}
                    </h3>
                </div>
                <div className='my-8 flex justify-start'>
                    {producto.stock == 0 
                    ? 
                    <p className='text-2xl'>Sin Stock</p> 
                    : 
                    cart ? 
                    <>
                        <Link to= '/cart'><button className='mt-5 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>Ir al Carrito</button></Link>
                        
                    </>
                    : 
                    <ItemCount initial={1} stock={producto.stock} agregar={agregar}/>}
                        </div>
            </div>

        </div>
    )
}

export default ItemDetail