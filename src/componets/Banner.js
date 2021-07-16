import React, { useState } from 'react';
import '../styles/style.css';
import { Button } from "@material-ui/core";
import { Search } from './Search';

export const Banner = ()=>{
    const [showSearch,setShowSearch ] = useState(false);

    return(
        <div className="banner">
            <div className="banner__search">
                { showSearch  && <Search/>}
                <Button
                    onClick={ ()=>setShowSearch(!showSearch) } 
                    className="banner__searchButton"
                    variant="outlined"
                >
                    { showSearch ? "Ocultar":'Busqueda de fechas'}
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