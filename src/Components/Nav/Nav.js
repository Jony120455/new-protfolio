import React, { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBookHeart } from 'react-icons/bi';
import { RiServiceFill } from 'react-icons/ri';
import { BiMessageAltDetail } from 'react-icons/bi';
import './Nav.css'

const Nav = () => {
    const [navActive, setNavActive] = useState('#')
    return (
        <nav>
            <a  href='#' onClick={() => setNavActive('#')} className={navActive === '#' ? 'active':''}><AiOutlineHome></AiOutlineHome></a>


            <a href='#about' onClick={() => setNavActive('#about')} className={navActive === '#about' ? 'active':''}><AiOutlineUser></AiOutlineUser></a>


            <a href='#exprience' onClick={() => setNavActive('#exprience')} className={navActive === '#exprience' ? 'active':''}><BiBookHeart></BiBookHeart></a>


            <a href='#protfolio' onClick={() => setNavActive('#protfolio')} className={navActive === '#protfolio' ? 'active':''}><RiServiceFill></RiServiceFill></a>


            <a href='#contact' onClick={() => setNavActive('#contact')} className={navActive === '#contact' ? 'active':''}><BiMessageAltDetail></BiMessageAltDetail></a>
            
        </nav>
    );
};

export default Nav;