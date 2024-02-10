/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    const {idCategoria} = useParams()

    useEffect(()=>{

        const fetchData = async()=>{
            try{
                const res = await fetch('/productos.json')
                const data = await res.json()

                if(idCategoria){
                    const productosFiltrados = data.filter((p)=> p.tipoItem == idCategoria)
                    setProductos(productosFiltrados)
                }else{
                    setProductos(data)
                }

            }catch{
                console.log("error")
            }
        }

        fetchData()

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