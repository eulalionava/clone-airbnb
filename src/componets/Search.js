import React, { useState } from 'react';
import '../styles/style.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import  PeopleIcon from '@material-ui/icons/People';
import { Button } from "@material-ui/core";
import { DateRangePicker } from 'react-date-range';


export const Search = ()=>{

    const[ startDate,setStartDate ] = useState();
    const[ endDate,setEndDate ] = useState(new Date() );

    const selectionRange = {
        startDate:startDate,
        endDate:endDate,
        key:"selection"
    }

    function handSelect(ranges){
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate)
    }
    
    return(
        <div className="search">
            <DateRangePicker 
                ranges={[selectionRange]}
                onChange={ handSelect }
            />
            <h2>
                numero de invitados
                <PeopleIcon/>
            </h2>
            <input min={ 0 } defaultValue={ 2 } type="number"/>
            <Button>Buscar airbnb</Button>
        </div>
    )
}