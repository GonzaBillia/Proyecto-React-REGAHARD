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
            <form className='container mx-auto grid grid-cols-6' onSubmit={manejadorForm}>
                <div className='col-span-1 col-start-5 row-start-1 checkoutContainer'>
                    <div className='text-2xl mb-6 font-semibold'>
                        <h3>Tu Pedido</h3>
                    </div>
                    {/* Mapeo de Productos */}
                    {cart.map((producto)=>(
                        <div key={producto.id}>
                            <p className='my-3 text-lg'>
                                {""}
                                {producto.marca}{" "}{producto.modelo} x {producto.cantidad}
                            </p>
                        </div>
                        
                    ))}
                </div>

                <div className='col-span-2 col-start-2 checkoutContainer'>
                    <div className='border-b border-gray-900/10 pb-12 '>
                        <h2 className='text-base font-semibold leading-7 text-gray-900'>
                            Tus Datos de Compra
                        </h2>
                        <p className='mt-1 text-sm leading-6 text-gray-600'>
                            Rellena los campos para poder completar la operación
                        </p>

                        <div className="mt-10 grid grid-cols-1 gap-x-4 gap-y-8">
                            <div className="border-b border-gray-900/10 pb-12">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Informacion Personal</h2>

                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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
                                        <p>
                                            OrdenId: {ordenId}
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