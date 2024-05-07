import React, {createContext, useState} from 'react'

export const SearchContext = createContext()

const SearchProvider = ({children}) => {

    const [busqueda, setBusqueda] = useState("")

    const handleSearch = (data) => {
        setBusqueda(data)
        console.log(data)
    }

    return (
        <SearchContext.Provider value ={{
            busqueda,
            setBusqueda,
            handleSearch
        }}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchProvider