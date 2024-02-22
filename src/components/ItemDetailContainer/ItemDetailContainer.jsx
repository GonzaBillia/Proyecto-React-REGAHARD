import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'
import { getFirestore, doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])

    const{id} = useParams()

    useEffect(()=>{

        const fetchData = async()=>{
            try{
                const res = await fetch('/productos.json')
                const data = await res.json()
                const pDetectado = data.find((p)=>p.id == id)
                setProducto(pDetectado)
            }catch{
                console.log("error")
            }
        }

        fetchData()

    },[id])


    return (
        <div className='itemDetailContainer'>
            <ItemDetail producto = {producto}/>
        </div>
    )
}

export default ItemDetailContainer