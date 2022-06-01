import React from 'react';
import Logo from "../image/logo5.png" ;

const Header = () => {
  return (
    <>
    <div className="header">
        <img src={Logo} alt="Logo"/>
        <h1>Ankit Kaushik</h1>
    </div>
    </>
  )
}

export  default Header;