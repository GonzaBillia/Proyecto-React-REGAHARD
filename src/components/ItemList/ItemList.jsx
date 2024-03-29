import React, { useContext } from 'react'
import Item from '../Item/Item'
import './ItemList.css'
import { CartContext } from '../context/CartContext'

const ItemList = ({productos}) => {

    const {agregarAlCarrito} = useContext(CartContext)

    const agregarSolo = (producto) =>{
        agregarAlCarrito(producto)
    }


    return (
        <div key={productos.id} className='itemList'>
            {
                productos.map((producto)=>{
                    return(
                        <Item key={producto.id} producto={producto} agregarSolo={agregarSolo}/>
                    )
                })
            }
        </div>
    )
}

export default ItemList