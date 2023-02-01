import React, { useRef } from 'react';
import Cta from './Cta';
import jony from '../../assets/jony.png'
import HeaderSocial from './HeaderSocial';
import './Header.css'
import { motion,useAnimationFrame } from "framer-motion"
import Name from './Name';


const Header = () => {
    const names = "Jony Hossain".split("")

    const ref = useRef(null);

    useAnimationFrame((t) => {
        const y = (1 + Math.sin(t / 1000)) * 50;
        ref.current.style.transform = `translateY(${y}px) `;
      });
    return (
        <header>
            <div className='container header_container'>
            <h5>Hello I am</h5>
                {
                    names.map((name, id) =>{
                        return(
                            <Name key={id}>{name === " " ?"\u00A0":name}</Name>
                        )
                    })
                }
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
            <div className='scroll_down1' ref={ref}>
                <a  href='#footer' className='scroll_down'>Scroll Down</a>
            </div>
        </div>
        </header>
    );
};

export default Header;