import React from 'react';
import tes1 from '../../assets/expert-1.png'
import tes2 from '../../assets/expert-2.png'
import tes3 from '../../assets/expert-3.png'
import './Testimonial.css'
import {  Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
const Testimonial = () => {

    const data =[
        {
            id:1,
            avt:tes1,
            name:'Deeny',
            review:'I went to Thrive with a basic “feel” I wanted in a website. They helped flush out the visual layout and content. I will be using them again in future endeavors. Thanks again!'
        },
        {
            id:1,
            avt:tes2,
            name:'Provash',
            review:'We at Kee Service were very impressed with the all aspects of our new website. We would highly reccomend JONY to anyone looking to build a new website.'
        },
        {
            id:1,
            avt:tes3,
            name:'Jhemmy',
            review:'I love the energy and excitement my Jony exhibits toward the success of my business.'
        },
    ]
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className='container testimonials_container'
            
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
            >
                {
                    data.map(({id,avt, review,name}) =>{
                        return(


                            <SwiperSlide key={id} className='testimonial'>
                                    <div className='client_avater'>
                                        <img src={avt} alt=''></img>
                                        
                                    </div>
                                        <h5 className='client_name'>{name}</h5>
                                        <small className='client_review'>{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            
        </section>
    );
};

export default Testimonial;