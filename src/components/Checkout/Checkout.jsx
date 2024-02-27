import React, {useContext, useState} from 'react'
import { collection, addDoc, updateDoc, doc, getDoc, getFirestore } from 'firebase/firestore'
import { CartContext } from '../context/CartContext'

const Checkout = () => {

    //Info del Context
    const {cart, total, vaciarCarrito} = useContext(CartContext)

    //Datos del Componente
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirmacion, setEmailConfirmacion] = useState("")
    const [ordenId, setOrdenId] = useState("")
    const [error, setError] = useState("")

    //Submit
    const manejadorForm = (event)=>{
        //evitar que se ejecute el evento submit
        event.preventDefault()

        //manejo de errores
        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion){
            setError("Completa todos los campos requeridos")
            return;
        }

        if(email !== emailConfirmacion){
            setError("el Email no conincide")
            return;
        }

        //Crear instancia de DB
        const db = getFirestore()

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
            <h2>Ingresa tus Datos</h2>

            <form onSubmit={manejadorForm}>
                {/* Mapeo de Productos */}
                {cart.map((producto)=>(
                    <div key={producto.id}>
                        <p>
                        {""}
                        {producto.modelo} x {producto.cantidad}
                    </p>
                    </div>
                    
                ))}

                <div>
                    <div>
                        <label htmlFor="Nombre">Nombre</label>
                        <input name="Nombre" type="text" onChange={(e)=> setNombre(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="Apellido">Apellido</label>
                        <input name="Apellido" type="text" onChange={(e)=> setApellido(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="Telefono">Telefono</label>
                        <input name="Telefono" type="text" onChange={(e)=> setTelefono(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="Email">Email</label>
                        <input name="Email" type="email" onChange={(e)=> setEmail(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="EmailConfirmacion">EmailConfirmacion</label>
                        <input name="EmailConfirmacion" type="email" onChange={(e)=> setEmailConfirmacion(e.target.value)} />
                    </div>

                    <button type='submit'>Comprar</button>

                    {error && <p>{error}</p>}

                    {ordenId && (
                        <p>
                            OrdenId: {ordenId}
                        </p>
                    )}
                </div>
            </form>
        </div>
    )
}

export default Checkout