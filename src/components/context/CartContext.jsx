import React, {createContext, useState} from "react"


export const CartContext = createContext()

const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [totalProductos, setTotalProductos] = useState(0)


    const agregarAlCarrito = (producto) => {
            const productoEnCarritoIndex = cart.findIndex(item => item.id == producto.id)
            if(productoEnCarritoIndex >= 0){
                const nuevoCart = structuredClone(cart)

                if((nuevoCart[productoEnCarritoIndex].cantidad + producto.cantidad) > nuevoCart[productoEnCarritoIndex].stock){
                    alert("No hay Stock suficiente, puedes añadir hasta " + (producto.stock - nuevoCart[productoEnCarritoIndex].cantidad))
                    
                    return(cart)
                }else{
                    nuevoCart[productoEnCarritoIndex].cantidad += producto.cantidad
                    return setCart(nuevoCart, cantidadCarrito(producto.cantidad), totalCarrito(producto))
                    
                }
            }else{
                setCart(prevState =>([
                    ...prevState,
                    {
                        ...producto
                    }
                    
                ]))
                cantidadCarrito(producto.cantidad)
    
                totalCarrito(producto.precio, producto.cantidad)
            }

            
    }

    const eliminarItem = (producto) => {
        const productoEnCarritoIndex = cart.indexOf(producto)

        const nuevoCart = structuredClone(cart)
        setTotal(total - (nuevoCart[productoEnCarritoIndex].cantidad * nuevoCart[productoEnCarritoIndex].precio))
        setTotalProductos(totalProductos - nuevoCart[productoEnCarritoIndex].cantidad)
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

    const totalCarrito = (precio, cantidad) => {
        const calculo = precio * cantidad
        const sumaTotal = calculo + total
        setTotal(sumaTotal)
    }


    return(
        <CartContext.Provider value ={{
            cart,
            total,
            totalProductos,
            agregarAlCarrito,
            vaciarCarrito,
            cantidadCarrito,
            totalCarrito,
            eliminarItem
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider