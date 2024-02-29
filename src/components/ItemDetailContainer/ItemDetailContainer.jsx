import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase/config'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])

    const{id} = useParams()

    useEffect(()=>{

        //Generar llamado al doc determinado
        const nuevoDocumento = doc(db,"producto",id)

        //Hacer llamado al doc y lo renderizamos
        getDoc(nuevoDocumento)
            .then(res=>{
                const data = res.data()
                const nuevoProducto = {id:res.id,...data}
                setProducto(nuevoProducto)
            })
            .catch((err)=>console.log(err))

    },[id])


    return (
        <div className='itemDetailContainer'>
            <ItemDetail producto = {producto}/>
        </div>
    )
}

export default ItemDetailContainer