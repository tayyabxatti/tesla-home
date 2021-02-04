import React from 'react'
import './header.css'
import TeslaLogo from '../assets/teslaLogoSmall.svg'
const Header = () => {
    return (
        <div className='header' >
            <div class='.header__logo'>
                <img src={TeslaLogo}  alt='Tesla Logo'/>
                </div> 
                <div className="header__center">
                 <p>Model S</p>
                 <p>Model 3</p>
                 <p>Model X</p>
                 <p>Model S</p>
                 <p>Solar Roof</p>
                 <p>Solar Panel</p>
           </div>
           <div className="header__right">
               <p>Shop</p>
               <p>Tesla Account</p>
           </div>
        </div>
        
    )
}

export default Header
