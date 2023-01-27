import React from 'react';
import Cta from './Cta';
import jony from '../../assets/jony.png'
import HeaderSocial from './HeaderSocial';
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className='container header_container'>
            <h5>Hellow Im</h5>
            <h1>Jony Hossain</h1>
            <h5>Front End web developer</h5>
            <Cta></Cta>
            <HeaderSocial></HeaderSocial>
            <div className='me'>
                <img src={jony} alt=''></img>
            </div>
            <div>
                <a href='#contact' className='scroll_down'>Scroll Down</a>
            </div>
        </div>
        </header>
    );
};

export default Header;