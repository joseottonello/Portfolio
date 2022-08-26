import { React, useEffect } from 'react';
import contentJSON from '../../mock/content.json';
import Button from '@mui/material/Button';
import DescriptionIcon from '@mui/icons-material/Description';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../sass/presentation.scss';


const Presentation = () => {
    const comeContent = contentJSON.filter(
        (x) => x.name === "José Ottonello");

    useEffect(() => {
        AOS.init();
    }, [])

    const theme = createTheme({
        palette: {
          primary: {
            main: '#3283FC',
          },
          secondary: {
            main: '#888',
          },
        },
    });

    return (
        <>
            {comeContent.map((data) => (
                <div 
                key={data.name}
                className="presentation-content"
                data-aos="fade-up" 
                data-aos-duration="2000">
                    <section
                    className="presentation-content-text">
                        <article 
                        className="presentation-content-text-description">
                            <h1>{data.name}</h1>
                            <h2>{data.profile}</h2>
                            <p>{data.description}</p>
                        </article>
                        <article 
                        className="presentation-content-text-actions">
                            <ThemeProvider theme={theme}>
                                <Button 
                                href="https://www.linkedin.com/in/frontend-ottonellojose/"
                                target="_blank"
                                variant="contained" 
                                color="primary"
                                startIcon={<LinkedInIcon/>}
                                >LINKEDIN
                                </Button>
                                <Button 
                                variant="outlined" 
                                color="secondary" 
                                startIcon={<DescriptionIcon/>}
                                >CURRÍCULUM
                                </Button>
                            </ThemeProvider>
                        </article> 
                    </section>
                    <img 
                    alt={data.name}
                    src={data.path}
                    className="presentation-content-photo"/> 
                </div>
            ))}
        </>
    );
}

export default Presentation