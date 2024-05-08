/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    const {idCategoria} = useParams()

    useEffect(()=>{

        //Generar filtrado de productos
        const misProductos = idCategoria 
        ? 
        query(collection(db, "producto"), where("tipoItem","==",idCategoria)) 
        : 
        collection(db,"producto")

        //Generar documentas solicitados
        getDocs(misProductos)
            .then((res)=>{
                const nuevosProductos = res.docs.map((doc) =>{
                    const data = doc.data()
                    return {id: doc.id,...data}
                })
                setProductos(nuevosProductos.sort((a,b)=> a.precio - b.precio))
            })
            .catch((err)=>console.log(err))

    },[idCategoria])

    return (
        <div className='itemListContainer'>

            {productos.length == 0 ?
            <h2>Cargando...</h2> :
            <ItemList productos={productos}/>
            }

        </div>
    )
}

export default ItemListContainer