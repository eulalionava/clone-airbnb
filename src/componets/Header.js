import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/icons/AccountCircle';

export const Header = ()=>{
return(
    <div className="header">
        <img
            className="header__icon"
            src="http://1000marcas.net/wp-content/uploads/2020/01/Airbnb-logo.jpg"
            alt="" />
        
        <div className="header__center">
            <input type="text"/>
            <SearchIcon/>
        </div>
        <div className="header__right">
            <p>Become a host</p>
            <LanguageIcon/>
            <ExpandMoreIcon/>
            <Avatar/>
        </div>
    </div>
)
}