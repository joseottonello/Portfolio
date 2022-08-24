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
            <h1>Tools</h1>
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