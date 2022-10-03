import { React, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../sass/contact.scss';
import cv from '../../assets/JoséOttonello.pdf';

const Contact = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div 
        className="contact-content"
        data-aos="fade-up" 
        data-aos-duration="2000">
            <h1>Contact</h1>
            <p>Thanks for getting here! If you liked my projects, I invite you to contact us 👇🏼</p>
            <section className="contact-content-socialMedia">
                <article className="contact-content-socialMedia-icons">
                    <a 
                    target="_blank" 
                    rel="noreferrer"
                    href="mailto:ottonellojose@outlook.com" 
                    >
                        <img 
                        alt="gmail icon"
                        className="contact-content-socialMedia-icons-icon"
                        src="https://img.icons8.com/ios/50/000000/circled-envelope.png"/>
                    </a>
                        <h2>EMAIL</h2>
                </article>
                <article className="contact-content-socialMedia-icons">
                    <a 
                    target="_blank" 
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/frontend-ottonellojose/" 
                    >
                        <img 
                        alt="linkedin icon"
                        className="contact-content-socialMedia-icons-icon"
                        src="https://img.icons8.com/ios/50/000000/linkedin-circled--v1.png" 
                        />
                    </a>
                        <h2>LINKEDIN</h2>
                </article>
                <article className="contact-content-socialMedia-icons">
                    <a 
                    target="_blank" 
                    rel="noreferrer"
                    href={cv}
                    download
                    >
                        <img 
                        alt="cv icon"
                        className="contact-content-socialMedia-icons-icon"
                        src="https://img.icons8.com/ios/50/000000/user-male-circle.png" 
                        />
                    </a>
                        <h2>CURRÍCULUM</h2>
                </article>
                <article className="contact-content-socialMedia-icons">
                    <a 
                    target="_blank" 
                    rel="noreferrer"
                    href="https://github.com/joseottonello" 
                    >
                        <img 
                        alt="github icon"
                        className="contact-icon"
                        src="https://img.icons8.com/ios/50/000000/github--v1.png" 
                        />
                    </a>
                        <h2>GITHUB</h2>
                </article>
            </section>
        </div>
    )
}

export default Contact