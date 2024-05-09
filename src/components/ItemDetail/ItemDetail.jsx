import React, {useContext, useState} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import {Link} from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { Badge } from '@material-tailwind/react'

const ItemDetail = ({producto}) => {

    const [cart, setCart] = useState(false)

    const {agregarAlCarrito} = useContext(CartContext)

    const agregar = (count) =>{
        setCart(true)

        producto.cantidad = count

        agregarAlCarrito(producto)

        
    }


    return (
        <div className='container mx-auto grid grid-cols-6 lg:grid-cols-12 grid-flow-rows py-20 lg:py-32 detailContainer flex-grow'>
            <div className='col-span-6 col-start-1 row-start-1 lg:col-span-6 p-8 lg:p-10 '>
                <Badge content ={
                        producto.stock == 1 ? "Ultimo" : "Disponible"
                    } color={
                        producto.stock == 1 ? "yellow" : "green"
                    }>
                    <img src={producto.img} alt={producto.alt} className='w-full p-3 lg:p-8 shadow-md rounded-md'/>
                </Badge>
            </div>
            <div className='col-span-6 col-start-1 row-start-2 lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-6 justify-start p-10'>
                <div>
                    <h4 className='text-2xl my-3'>
                        {producto.tipoItem}
                    </h4>
                </div>
                <div className='border-b-2'>
                    <h2 className='text-3xl md:text-5xl my-6'>
                    {producto.marca} {" "} {producto.modelo}
                    </h2>
                </div>
                <div>
                    <h3 className='text-3xl md:text-5xl my-6'>
                        ${producto.precio}
                    </h3>
                </div>
                <div className='my-8 flex justify-center'>
                    {producto.stock == 0 
                    ? 
                    <p className='text-2xl'>Sin Stock</p> 
                    : 
                    cart ? 
                    <>
                        <Link to= '/cart'><button className='mt-5 flex w-full items-center justify-center rounded-md border border-transparent bg-deep-purple-500 px-8 py-3 text-base font-medium text-white hover:bg-deep-purple-900 duration-200'>Ir al Carrito</button></Link>
                        
                    </>
                    : 
                    <ItemCount initial={1} stock={producto.stock} agregar={agregar}/>}
                        </div>
            </div>

        </div>
    )
}

export default ItemDetail