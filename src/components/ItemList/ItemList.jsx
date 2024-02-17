import React from 'react'
import Item from '../Item/Item'
import './itemList.css'

const ItemList = ({productos}) => {
    return (
        <div key={productos.id} className='itemList'>
            {
                productos.map((producto)=>{
                    return(
                        <Item key={producto.id} producto={producto}/>
                    )
                })
            }
        </div>
    )
}

export default ItemList