import React from 'react';
import Presentation from './components/presentation/Presentation';
import Skills from './components/skills/Skills';
import Tools from './components/tools/Tools';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import './sass/app.scss';

const App = () => {
    return (
        <div className="app-content">
            <Presentation/>
            <Skills/>
            <Tools/>
            <Portfolio/>
            <Contact/>
        </div>
    );
}

export default App;
