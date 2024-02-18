import React, {createContext, useState} from "react"


export const CartContext = createContext()

const CartProvider = ({children}) =>{
    const arrayInicial = []
    const [cart, setCart] = useState(arrayInicial)
    const [total, setTotal] = useState(0)
    const [totalProductos, setTotalProductos] = useState(0)


    const agregarAlCarrito = (producto) => {
            const productoEnCarritoIndex = cart.findIndex(item => item.id == producto.id)

            if(productoEnCarritoIndex >= 0){
                const nuevoCart = structuredClone(cart)
                nuevoCart[productoEnCarritoIndex].cantidad += producto.cantidad
                return setCart(nuevoCart)
            }

            setCart(prevState =>([
                ...prevState,
                {
                    ...producto
                }
            ]))


    }

    const eliminarItem = (id) => {
        const productoEnCarritoIndex = cart.findIndex(item => item.id == id)

        const nuevoCart = structuredClone(cart)
        nuevoCart.splice (productoEnCarritoIndex, 1)
        setCart(nuevoCart)

    }

    const vaciarCarrito = () => {
        setCart([])
        setTotalProductos(0)
        setTotal(0)
    }

    const cantidadCarrito = (count) => {
        setTotalProductos(totalProductos + count)
    }

    const totalCarrito = (producto) => {
        setTotal((producto.precio * producto.cantidad) + total)
    }


    return(
        <CartContext.Provider value ={{
            cart,
            total,
            totalProductos,
            agregarAlCarrito,
            vaciarCarrito,
            cantidadCarrito,
            totalCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider