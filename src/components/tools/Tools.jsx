import { React, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import contentJSON from '../../mock/content.json';
import '../../sass/tools.scss';

const Tools = () => {
    const comeContent = contentJSON.filter(
        (x) => x.type === "tool")

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div 
        className="tools-content"
        data-aos="fade-up" 
        data-aos-duration="2000">
            <h1>Herramientas</h1>
            {comeContent.map((data) => (
                <div 
                key={data.name}
                data-aos="fade-up" 
                data-aos-duration="2000"
                className="tools-content-children">
                    <section className="tools-content-children-card">
                        <article>
                            <h2>{data.name}</h2>
                            <p>{data.description}</p>
                            {
                                data.name === "Software de gestión de proyectos" 
                                    ? <p>
                                        <a 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        href="https://daily-viburnum-53a.notion.site/React-7fe2e10a5b9b44ceb8354fb4c2ae34de" 
                                        className="notion-anclaje">haciendo click aqui</a> podrás acceder a mi documentación.
                                    </p> : null
                            }
                        </article>
                        <article>
                            <img src={data.icon} alt={data.name}/>
                        </article>
                    </section>
                </div>
            ))} 
        </div>
    )
}

export default Tools