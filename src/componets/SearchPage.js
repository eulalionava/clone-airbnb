import React from 'react';
import '../styles/style.css';
import { Button } from "@material-ui/core";
import { SearchResult } from './SearchResult';

export const SearchPage = ()=>{
    return(
        <div className="searchPage">
            <div className="searchPage__info">
                <p>30 dias 6 de mayo a 30 de junio</p>
                <h1>Cerca de 30</h1>
                <Button variant="outlined">
                    cancelados
                </Button>
                <Button variant="outlined">
                    Tipo de lugares
                </Button>
                <Button variant="outlined">
                    Precios
                </Button>
                <Button variant="outlined">
                    Cuartos
                </Button>
                <Button variant="outlined">
                    Mas filtros
                </Button>
            </div>
            <SearchResult 
                img="https://revistatraveling.com/wp-content/uploads/2019/08/Airbnb-Plus-Listing-London-1-1024x683.jpg"
                location="Cuarto privado en centro de mexico"
                title="Espacios House"
                description="2 recamaras, regadera, un comedor, wifi, un baño"
                star={ 4.5 }
                price="$400/noche"
                total="500 total"/>
            <SearchResult 
                img="https://revistatraveling.com/wp-content/uploads/2019/08/Airbnb-Plus-Listing-London-1-1024x683.jpg"
                location="Cuarto privado en centro de mexico"
                title="Espacios House"
                description="2 recamaras, regadera, un comedor, wifi, un baño"
                star={ 4.5 }
                price="$400/noche"
                total="500 total"/>
            <SearchResult 
                img="https://revistatraveling.com/wp-content/uploads/2019/08/Airbnb-Plus-Listing-London-1-1024x683.jpg"
                location="Cuarto privado en centro de mexico"
                title="Espacios House"
                description="2 recamaras, regadera, un comedor, wifi, un baño"
                star={ 4.5 }
                price="$400/noche"
                total="500 total"/>
        </div>
    )
}