import React, {useContext, useState} from 'react'
import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore'
import { CartContext } from '../context/CartContext'
import { db } from '../../firebase/config'
import './Checkout.css'

const Checkout = () => {

    //Info del Context
    const {cart, total, vaciarCarrito} = useContext(CartContext)

    //Datos del Componente
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [ordenId, setOrdenId] = useState("")
    const [error, setError] = useState("")

    //Submit
    const manejadorForm = (event)=>{
        //evitar que se ejecute el evento submit
        event.preventDefault()

        //manejo de errores
        if(!nombre || !apellido || !telefono || !email){
            setError("Completa todos los campos requeridos")
            return;
        }

        //Generar objeto de la orden de compra
        const orden = {
            items: cart.map((producto)=>({
                id: producto.id,
                modelo: producto.modelo,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        }

        //Generar la logica para la orden y reduccion del stock
        Promise.all(
            orden.items.map(async (productoOrden)=>{
                const productoRef = doc(db,"producto",productoOrden.id)
                const productoDoc = await getDoc(productoRef)
                const stockActual = productoDoc.data().stock

                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad
                })
            })
        )
        .then(()=>{
            addDoc(collection(db,"ordenes"),orden)
            .then((docRef)=>{
                setError("")
                setOrdenId(docRef.id)
                vaciarCarrito()
            })
            .catch((err)=>{
                console.log(err)
                setError("Se produjo un error al crear la orden")
            })
        })
        .catch((err)=>{
            console.log(err)
            setError("No se puede actualizar el stock")
        })
    }

    return (
        <div>
            <form className='container mx-auto grid grid-cols-4 md:grid-cols-12 md:grid-rows-2 pt-32' onSubmit={manejadorForm}>
                <div className='grid grid-cols-6 grid-rows-6 col-span-4 col-start-1 md:col-start-8 row-start-1 row-span-1 md:row-span-2 checkoutContainer shadow-md rounded-md px-3 m-5'>
                    <div className='text-3xl font-semibold row-span-1 row-start-1 col-span-4 flex items-center'>
                        <h3>Tu Pedido</h3>
                    </div>
                    <div className='col-span-6 row-start-2 row-span-4'>
                        <div className='grid grid-cols-6 grid-rows-1 border-b'>
                            <p className='col-start-1 col-span-3 flex items-center'>Producto</p>
                            <p className='col-start-4 col-span-1 flex items-center justify-end'>Cantidad</p>
                            <p className='col-start-5 col-span-2 flex items-center justify-end'>Precio</p>
                        </div>
                        
                        {/* Mapeo de Productos */}
                        {cart.map((producto)=>(
                            <div key={producto.id} className='grid grid-cols-6 grid-rows-1 border-b'>
                                <div className='col-start-1 col-span-3 flex items-center'>
                                    <p className='my-2 text-md lg:text-lg truncate capitalize'>
                                        {producto.marca}{" "}{producto.modelo}
                                    </p>
                                </div>
                                <div className='col-start-4 col-span-1 flex items-center justify-end'>
                                    <p className='my-2 text-md lg:text-lg '>
                                        {producto.cantidad}
                                    </p>
                                </div>
                                <div className='col-start-5 col-span-2 flex items-center justify-end'>
                                    <p>
                                        ${producto.precio}
                                    </p>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                    <div className='mt-5 flex items-center row-start-6 row-span-1 col-span-6'>
                        <p className='my-3 text-xl md:text-3xl'>Total: ${total}</p>
                    </div>
                </div>

                <div className='col-span-4 row-start-2 row-span-1 md:col-span-5 md:row-start-1 md:col-start-2 md:row-span-6 checkoutContainer shadow-md rounded-md px-3 m-5'>
                    <div className='border-b border-gray-900/10 pb-12 px-3'>
                        <h2 className='mt-5 text-3xl font-semibold leading-7 text-gray-900'>
                            Tus Datos de Compra
                        </h2>
                        <p className='mt-2 text-sm leading-6 text-gray-600'>
                            Rellena los campos para poder completar la operación
                        </p>

                        <div className="mt-8 grid grid-cols-1 gap-x-4 gap-y-8">
                            <div className="border-b border-gray-900/10">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Informacion Personal</h2>

                                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-3">
                                        <label htmlFor="nombre" className="block text-sm font-medium leading-6 text-gray-900" >
                                            Nombre
                                        </label>
                                        <div className="mt-2">
                                            <input
                                            type="text"
                                            name="nombre"
                                            id="nombre"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={(e)=> setNombre(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="apellido" className="block text-sm font-medium leading-6 text-gray-900" >
                                            Apellido
                                        </label>
                                        <div className="mt-2">
                                            <input
                                            type="text"
                                            name="apellido"
                                            id="apellido"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={(e)=> setApellido(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-4">
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                            Email address
                                        </label>
                                        <div className="mt-2">
                                            <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={(e)=> setEmail(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-full">
                                        <label htmlFor="telefono" className="block text-sm font-medium leading-6 text-gray-900" >
                                            Telefono
                                        </label>
                                        <div className="mt-2">
                                            <input
                                            type="number"
                                            name="telefono"
                                            id="telefono"
                                            autoComplete="phone"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={(e)=> setTelefono(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <button className='col-span-full flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2' type='submit'>Comprar</button>

                                    {error && <p>{error}</p>}

                                    {ordenId && (
                                        <p className='col-span-full'>
                                            <b>Orden de Comrpa:</b> {ordenId}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Checkout