import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";

const MostrarComponente = (children) => {

    const location = useLocation()

    const [MostrarComponente, setMostrarComponente] = useState(false)

    useEffect(() => {
        if(location.pathname === '/Proyecto-React-REGAHARD/admin'){
            setMostrarComponente(false)
        } else{
            setMostrarComponente(true)
        }
    }, [location])

    return 
        <div>
            {MostrarComponente && children}
        </div>
};

export default MostrarComponente;
