import { React, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../sass/contact.scss';

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
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur blanditiis quam dolore natus sequi laborum, id modi ullam debitis architecto voluptatum? Dolorem deserunt neque architecto iusts!</p>
            <section className="contact-content-socialMedia">
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
                        <h2>LINKEDIN</h2>
                    </a>
                    <span>frontend-ottonellojose</span>
                </article>
                <article className="contact-content-socialMedia-icons">
                    <a 
                    target="_blank" 
                    rel="noreferrer"
                    href="https://github.com/joseottonello" 
                    >
                        <img 
                        alt="github icon"
                        className="contact-content-socialMedia-icons-icon"
                        src="https://img.icons8.com/ios/50/000000/github--v1.png" 
                        />
                        <h2>GITHUB</h2>
                    </a>
                    <span>joseottonello</span>
                </article>
                <article className="contact-content-socialMedia-icons">
                    <a 
                    target="_blank" 
                    rel="noreferrer"
                    href="mailto:dev.ottonellojose@gmail.com" 
                    >
                        <img 
                        alt="cv icon"
                        className="contact-content-socialMedia-icons-icon"
                        src="https://img.icons8.com/ios/50/000000/user-male-circle.png" 
                        />
                        <h2>CV</h2>
                    </a>
                        <span>José Ottonello</span>
                </article>
                <article className="contact-content-socialMedia-icons">
                    <a 
                    target="_blank" 
                    rel="noreferrer"
                    href="mailto:dev.ottonellojose@gmail.com" 
                    >
                        <img 
                        alt="gmail icon"
                        className="contact-content-socialMedia-icons-icon"
                        src="https://img.icons8.com/external-others-inmotus-design/50/000000/external-Gmail-virtual-keyboard-others-inmotus-design-3.png" 
                        />
                        <h2>GMAIL</h2>
                    </a>
                        <span>dev.ottonellojose</span>
                </article>
            </section>
        </div>
    )
}

export default Contact