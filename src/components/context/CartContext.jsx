import React, {createContext, useState} from "react"


export const CartContext = createContext()

const CartProvider = ({children}) =>{
    const arrayInicial = []
    const [cart, setCart] = useState(arrayInicial)
    const [total, setTotal] = useState(0)
    const [totalProductos, setTotalProductos] = useState(0)


    const agregarAlCarrito = (producto) => {
        if(cart.length == 0){
            arrayInicial.push(producto)
            setCart(arrayInicial)
            console.log(cart)
        }else{
            arrayInicial.push(producto)
            setCart(arrayInicial)
            console.log(cart)
        }
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