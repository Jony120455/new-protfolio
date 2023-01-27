import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './Experience.css'


const Exprience = () => {
    return (
        <section id='exprience'>
            <h5>What Skills I have</h5>
            <h2>My Expeience</h2>
            <div className='container experience_container'>
                <div className='experience_frontend'>
                    <h3>Frontend Development</h3>
                    <div className='experience-content'>
                        <article className='experience-details'>
                            <BsFillPatchCheckFill className='experience-details-icom'></BsFillPatchCheckFill>
                                <div>
                                    <h4>HTML</h4>
                                    <small>experience</small>
                                </div>
                        </article>
                        <article className='experience-details'>
                            <BsFillPatchCheckFill className='experience-details-icom'></BsFillPatchCheckFill>
                                <div>
                                    <h4>CSS</h4>
                                    <small>experience</small>
                                </div>
                        </article>
                        <article className='experience-details'>
                            <BsFillPatchCheckFill className='experience-details-icom'></BsFillPatchCheckFill>
                                <div>
                                    <h4>Tailwind</h4>
                                    <small>experience</small>
                                </div>
                        </article>
                        <article className='experience-details'>
                            <BsFillPatchCheckFill className='experience-details-icom'></BsFillPatchCheckFill>
                               <div>
                                    <h4>BootStrap</h4>
                                    <small>experience</small>
                               </div>
                        </article>
                        <article className='experience-details'>
                            <BsFillPatchCheckFill className='experience-details-icom'></BsFillPatchCheckFill>
                                <div>
                                    <h4>jQuerry</h4>
                                    <small>experience</small>
                                </div>
                        </article>
                        <article className='experience-details'>
                            <BsFillPatchCheckFill className='experience-details-icom'></BsFillPatchCheckFill>
                                <div>
                                    <h4>React</h4>
                                    <small>experience</small>
                                </div>
                        </article>
                    </div>
                </div>
                <div className='exprience-backend'>
                    <h3>Backend Development</h3>
                    <div className='experience-content'>
                        <article className='experience-details'>
                            <BsFillPatchCheckFill className='experience-details-icom'></BsFillPatchCheckFill>
                                <div>
                                    <h4>nodeJs</h4>
                                    <small>Intermediate</small>
                                </div>
                        </article>
                        <article className='experience-details'>
                            <BsFillPatchCheckFill className='experience-details-icom'></BsFillPatchCheckFill>
                               <div>
                                    <h4>Mongodb</h4>
                                    <small>Intermediate</small>
                               </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    
    );
};

export default Exprience;