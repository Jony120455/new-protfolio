import React from 'react';
import Cta from './Cta';
import jony from '../../assets/jony.png'
import HeaderSocial from './HeaderSocial';
import './Header.css'
import { motion } from "framer-motion"


const Header = () => {
    return (
        <header>
            <div className='container header_container'>
            <h5>Hellow Im</h5>
            <h1>Jony Hossain</h1>
            <h5>Front End web developer</h5>
            <Cta></Cta>
            <HeaderSocial></HeaderSocial>
            <motion.div
             className='me'
             drag
             dragConstraints={{
                top:2,
                left:-5,
                right:5,
                bottom:5
             }}
             whileHover={{
                    scale:1.1

             }} 
             whileTap={{
                scale:0.9
             }}
             >
                <img src={jony} alt=''></img>
            </motion.div>
            <div>
                <a href='#footer' className='scroll_down'>Scroll Down</a>
            </div>
        </div>
        </header>
    );
};

export default Header;