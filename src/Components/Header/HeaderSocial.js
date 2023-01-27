import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineDribbble } from 'react-icons/ai';

const HeaderSocial = () => {
    return (
        <div className='header_social'>
            <a href='https://www.linkedin.com/in/jony-hossain/' target='_blank' rel="noreferrer"><AiFillLinkedin></AiFillLinkedin></a>
            <a href='https://github.com/Jony120455' target='_blank' rel="noreferrer"><AiFillGithub></AiFillGithub></a>
           
        </div>
    );
};

export default HeaderSocial;