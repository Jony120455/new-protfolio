import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import './Footer.css'

const Footer = () => {
    return (
        <footer id='footer'>
            <a href='#' className='footer_logo'>JONY</a>
     
            <ul className='permalinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#exprience'>Experience</a></li>
                <li><a href='#protfolio'>Protfolio</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>

            <div className='footer_social'>
                <a href='https://www.facebook.com/' target='_blank' rel="noreferrer"><BsFacebook></BsFacebook></a>
                <a href='https://www.linkedin.com/in/jony-hossain/' target='_blank' rel="noreferrer"><AiFillLinkedin></AiFillLinkedin></a>

            </div>
        </footer>
    );
};

export default Footer;