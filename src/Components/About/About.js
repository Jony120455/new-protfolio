import React from 'react';
import './About.css'
import me from '../../assets/New Project.jpg'
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { AiFillProject } from 'react-icons/ai';

const About = () => {
    return (
        <section id='about'>
            <h5>Get to know</h5>
            <h2>About me</h2>

            <div className='container about_container'>
                <div className='about_me'>
                    <div className='about_me-image'>
                            <img src={me} alt=''></img>
                    </div>
                </div>
                <div className='about_content'>
                    <div className='about_cards'>
                        <article className='about_card'>
                            <FaAward className='about_icon'></FaAward>
                            <h5>Exprience</h5>
                            <small>2 years Exprience</small>
                        </article>
                        <article className='about_card'>
                            <FiUsers className='about_icon'></FiUsers>
                            <h5>Clients</h5>
                            <small>100 Worldwide</small>
                        </article>
                        <article className='about_card'>
                            <AiFillProject className='about_icon'></AiFillProject>
                            <h5>Projects</h5>
                            <small>60+ Projects Complete</small>
                        </article>
                    </div>
                    <p>Hi my name is Md. Jony hossain. I am a full stack web developer. programming language: JavaScript(ES6), HTML, CSS, Java Framework : ReactJS, NodeJS, Bootstrap, Material UI, TailwindCSS, React Native</p>
                    <a href='#contact' className='btn btn-primary'>Lets talk</a>
                </div>
            </div>
        </section>
    );
};

export default About;