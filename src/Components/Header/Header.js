import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {  Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
     
    
        <div className='icon'>MedCart</div>
        <div className='search-box'>
        <input type="search" placeholder='Search-here' />
        <span><SearchIcon></SearchIcon></span>
        
       
        </div>
            
        <ol>
        <Link to="/home">Home</Link>
        <Link to="/service">service</Link>
        <Link to="/login">Login</Link>
        <Link to="/registrations">Registrtions</Link>
       
         
         </ol>
    
   
   
     </div>
    );
};

export default Header;