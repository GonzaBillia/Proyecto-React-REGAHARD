import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import "./MainContainer.css"
import FlowCarousel from '../Carousel/FlowCarousel'

const MainContainer = () => {
    return (
        <div className='w-full pt-32'>
            
            <FlowCarousel/>
            <ItemListContainer/>
            
        </div>
    )
}

export default MainContainer