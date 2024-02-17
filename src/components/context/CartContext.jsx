import React, {createContext, useState} from "react"


export const CartContext = createContext()

const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [totalProductos, setTotalProductos] = useState(0)


    const agregarAlCarrito = (producto, cantidad) => {
        console.log(producto)
        console.log(cantidad)
        setTotalProductos(cantidad)
    }

    const eliminarItem = () => {

    }

    const vaciarCarrito = () => {

    }

    const cantidadCarrito = () => {

    }

    const totalCarrito = () => {

    }


    return(
        <CartContext.Provider value ={{
            cart,
            total,
            totalProductos,
            agregarAlCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider