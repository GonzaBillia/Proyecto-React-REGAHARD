import React, {useContext, useState} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import {Link} from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import Cart from '../Cart/Cart'

const ItemDetail = ({producto}) => {

    const [cart, setCart] = useState(false)

    const {agregarAlCarrito} = useContext(CartContext)

    const agregar = (count) =>{
        setCart(true)

        producto.cantidad = count
        
        agregarAlCarrito(producto)
    }

    return (
        <div key={producto.id} className='itemDetail'>
            <h3>Marca: {producto.marca}</h3>
            <h3>Modelo: {producto.modelo}</h3>
            <img src={producto.img} alt={producto.alt} className='cardImg'/>
            <h4>Precio: ${producto.precio}</h4>
            <p>Categoria: {producto.tipoItem}</p>

            {cart ? 
            <>
                <Link to= '/cart'><button>Ir al Carrito</button></Link>
                
            </>
            : 
            <ItemCount initial={1} stock={producto.stock} agregar={agregar}/>}

            

        </div>
    )
}

export default ItemDetail