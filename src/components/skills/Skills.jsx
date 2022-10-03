import { React, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import contentJSON from '../../mock/content.json';
import '../../sass/skills.scss';

const Skills = () => {
    const comeContent = contentJSON.filter(
        (x) => x.type === "skill")

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div 
        className="skills-content"
        data-aos="fade-up" 
        data-aos-duration="2000">
            <h1>Knowledge</h1>
            {comeContent.map((data) => (
                <div 
                key={data.name}
                data-aos="fade-up" 
                data-aos-duration="2000"
                className="skills-content-children">
                    <section className="skills-content-children-card">
                        <article>
                            <h2>{data.name}</h2>
                            <p>{data.description}</p>
                        </article>
                        <article>
                            <img src={data.icon1} alt={data.name}/>
                            <img src={data.icon2} alt={data.name}/>
                            {
                                data.name === "Main Stack" ? <img src={data.icon3} alt={data.name}/> : null
                            }
                            {
                                data.name === "Advanced Stack" ? <img src={data.icon3} alt={data.name}/> : null
                            }
                        </article>
                    </section>
                </div>
            ))} 
        </div>
    )
}

export default Skills