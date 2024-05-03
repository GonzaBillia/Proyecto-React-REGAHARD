import React ,{useState, useEffect, useContext} from 'react'
import ItemList from '../ItemList/ItemList'
import { CartContext } from '../context/CartContext'
import './SearchListContainer.css'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'

const SearchListContainer = () => {
    const [productos, setProductos] = useState([])
    const {busqueda} = useContext(CartContext)
    const {search} = useParams()

useEffect(()=>{
    search = busqueda
    console.log(search)
    //Generar filtrado de productos
    const misProductos = collection(db,"producto")

    //Generar documentas solicitados
    getDocs(misProductos)
        .then((res)=>{
            const nuevosProductos = res.docs.map((doc) =>{
                const data = doc.data()
                return {id: doc.id,...data}
            })
            setProductos(nuevosProductos.filter(producto => producto.marca.includes(search.toLowerCase())|| producto.modelo.includes(search.toLowerCase())))
            setProductos(nuevosProductos.sort((a,b)=> a.precio - b.precio))
        })
        .catch((err)=>console.log(err))


},[busqueda])

console.log(busqueda)

    return (
        <div className='SearchListContainer pt-10'>

            {productos.length == 0 ?
            <h2>Cargando...</h2> :
            <ItemList productos={productos}/>
            }

        </div>
    )
}

export default SearchListContainer