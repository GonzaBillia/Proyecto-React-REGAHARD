import React ,{useState, useEffect, useContext} from 'react'
import ItemList from '../ItemList/ItemList'
import { SearchContext } from '../context/SearchContext'
import './SearchListContainer.css'
import { useParams } from 'react-router-dom'
import { collection, getDocs, or, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'

const SearchListContainer = () => {
    const [productos, setProductos] = useState([])
    const {busqueda} = useContext(SearchContext)
    const {search} = useParams()

    

useEffect(()=>{
    
    const {search} = busqueda
    //Generar filtrado de productos
    const misProductos = search ? collection(db, "producto") : collection(db,"producto")
    
    //Generar documentas solicitados
    getDocs(misProductos)
        .then((res)=>{
            const nuevosProductos = res.docs.map((doc) =>{
                const data = doc.data()
                return {id: doc.id,...data}
            })
            setProductos(nuevosProductos.filter(producto => producto.marca.includes(search)|| producto.modelo.includes(search)))
            setProductos(nuevosProductos.sort((a,b)=> a.precio - b.precio))
        })
        .catch((err)=>console.log(err))
    
    console.log(productos)

},[search])

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