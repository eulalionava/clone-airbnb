import React, { useState } from 'react';
import '../styles/style.css';
import { Button } from "@material-ui/core"

export const Banner = ()=>{
    const [showSearch,setShowSearch ] = useState(false);

    return(
        <div className="banner">
            <div className="banner__search">
                { showSearch  && <h1>Mostrar fecha</h1>}
                <Button
                    onClick={ ()=>setShowSearch(!showSearch) } 
                    className="banner__searchButton"
                    variant="outlined"
                >
                    Buscar fecha
                </Button>
            </div>
            <div className="banner__info">
                <h1>salir y estirar tu imaginación</h1>
                <h5>Tienes diferentes planes para salir,encuentralo ahora</h5>
                <Button variant='outlined'>Explorar</Button>
            </div>
        </div>
    )
}