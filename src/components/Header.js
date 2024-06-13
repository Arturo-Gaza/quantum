import React from 'react';
import './Header.css';
import logoIcon from '../assets/logo.png'

const Header = () => {
   return (
    <header className='encabezado'>
        <img src={logoIcon} alt='logo' className='logo'></img>
    </header>
   );
};

export default Header;