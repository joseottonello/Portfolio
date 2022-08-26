import { React, useEffect } from 'react';
import contentJSON from '../../mock/content.json';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../../sass/portfolio.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {
    const comeContent = contentJSON.filter(
        (x) => x.type === "portfolio");
    
    useEffect(() => {
        AOS.init();
    }, [])

    const theme = createTheme({
        palette: {
          primary: {
            main: '#3283FC',
          },
          secondary: {
            main: '#777',
          },
        },
    });

    return (
        <div 
        className="portfolio-content"
        data-aos="fade-up" 
        data-aos-duration="2000">
            <h1>Portfolio</h1>
            {comeContent.map((data) => (
                <div 
                key={data.name}
                data-aos="fade-up" 
                data-aos-duration="2000"
                className="portfolio-content-children">
                    <h2>{data.name}</h2>
                    <p>{data.description}</p>
                        <ThemeProvider theme={theme}>
                            <article 
                            className="portfolio-content-text-actions">
                                <Button 
                                href={data.deploy} 
                                target="_blank" 
                                variant="contained" 
                                color="primary" 
                                startIcon={<WebIcon/>}
                                    >DEPLOY
                                </Button>
                                <Button 
                                href={data.repo} 
                                target="_blank" 
                                variant="outlined" 
                                color="secondary" 
                                startIcon={<GitHubIcon/>}
                                    >REPOSITORIO
                                </Button>
                            </article>
                        </ThemeProvider>
                    <div>
                        

                    </div>
                    <img 
                    className="portfolio-content-children-img"
                    src={data.path} 
                    alt={data.name}/>
                </div>
            ))}
        </div>      
    )
}

export default Portfolio
