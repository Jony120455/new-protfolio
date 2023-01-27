import React from 'react';
import { RiMessage2Line } from 'react-icons/ri';
import { BsMessenger } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import './Contact.css'
import  { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

         const form = useRef();

        const sendEmail = (e) => {
            e.preventDefault();

            emailjs.sendForm('service_10fh57j', 'template_a2jp05u', form.current, 'user_vHba3zf7fQt8RrP0Gbz5s')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
        };
    return (
        <section id='contact'>
            <h5>Get in Touch</h5>
            <h2>Contact</h2>
            <div className='container contact_container'>
                <div className='contact_options'>
                    <article className='contact_option'>
                        <RiMessage2Line className='contact_option-icon'></RiMessage2Line>
                        <h4>Email</h4>
                        <h5>Jonyh0296@gmail.com</h5>
                        <a href='mailto:jonyh0296@gmail.com' target='_blank' rel="noreferrer">Send message</a>

                    </article>
                    <article className='contact_option'>
                        <BsMessenger className='contact_option-icon'></BsMessenger>
                        <h4>Messenger</h4>
                        <h5>Md. Jony Hossain</h5>
                        <a href='https://www.facebook.com/profile.php?id=100088690030986' target='_blank' rel="noreferrer">Send message</a>

                    </article>
                    <article className='contact_option'>
                        <BsWhatsapp className='contact_option-icon'></BsWhatsapp>
                        <h4>Whatsapp</h4>
                        <h5>01869068778</h5>
                        <a href='https://api.whatsapp.com/send?phone+8801869068778' target='_blank' rel="noreferrer">Send message</a>
                    </article>

                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Input Your name' required></input>
                    <input type='email' name='email' placeholder='Input Your emaill' required></input>
                    <textarea name='message' rows='7' placeholder='Your message'></textarea>
                    <button type='submit' className='btn btn-primary'>Send message</button>
                </form>

            </div>
        </section>
    );
};

export default Contact;