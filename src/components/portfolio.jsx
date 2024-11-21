import React from 'react';
import './portfolio.css';
import '../App.css'; // Import your main CSS
// Import Project Images
import project1 from './images/PokemonApp.png';
import project2 from './images/RokApp1.png';
import logodefault from './images/facebooklogo.png';
// Import Logos
import htmllogo from './images/logos/html.svg';
import csslogo from './images/logos/css.svg';
import jslogo from './images/logos/javascript.svg';
import tslogo from './images/logos/typescript.svg';
import jqlogo from './images/logos/jquery.svg';
import reactlogo from './images/logos/react.svg';
import gitlogo from './images/logos/git.svg'
import vitelogo from './images/logos/vite.svg';
import phplogo from './images/logos/php.svg';
import figmalogo from './images/logos/figma.svg';
import illustratorlogo from './images/logos/illustrator.svg';
import photoshoplogo from './images/logos/photoshop.svg';
import davincilogo from './images/logos/davinci-resolve.svg';
import officelogo from './images/logos/office.svg';
import analyticslogo from './images/logos/google-analytics.svg';
import nodejslogo from './images/logos/node-js.svg';
import designlogo from './images/logos/ux-design.svg';
import researchlogo from './images/logos/user-research.svg';

const Portfolio = () => {
  return (
    <div className='portfolio'>
        <h1>Portfolio</h1>
        {/* Project1 */}
        <div className='project'>
            <div className='project-img'>
                <img src={project1}></img>
            </div>
            <div className='label-project'>
              <h2>Pokemon Search App</h2>
              <div className='project-programs'>
                {/* Add Programs Used */}
                <div className='program-used'>
                  <img src={vitelogo}></img>
                  <span>Vite</span>
                </div>
                <div className='program-used'>
                  <img src={reactlogo}></img>
                  <span>React</span>
                </div>
                <div className='program-used'>
                  <img src={tslogo}></img>
                  <span>TypeScript</span>
                </div>
                <div className='program-used'>
                  <img src={nodejslogo}></img>
                  <span>Node.js</span>
                </div>
              </div>
              <p>A web application to search and explore Pokémon details</p>
              {/* Go to Project Page */}
              <a href="#/PokemonApp">
                <button className='learn-more' >
                  Open Project ➤
                </button>
              </a>
            </div>
        </div>
        {/* Project2 */}
        <div className='project'>
            <div className='project-img'>
                <img src={project2}></img>
            </div>
            <div className='label-project'>
              <h2>Rok Manager AppDesign</h2>
              <div className='project-programs'>
                {/* Add Programs Used */}
                <div className='program-used'>
                  <img src={figmalogo}></img>
                  <span>Figma</span>
                </div>
                <div className='program-used'>
                  <img src={designlogo}></img>
                  <span>UI/UX Design</span>
                </div>
                <div className='program-used'>
                  <img src={researchlogo}></img>
                  <span>User Research</span>
                </div>
              </div>
              <p>Mobile application that give information to Rise of Kingdoms players</p>
              {/* Go to Project Page */}
              <a href="#/RokManager">
                <button className='learn-more' >
                  Open Project ➤
                </button>
              </a>
            </div>
        </div>
        {/* More */}
        <div className='more-projects'>
        <a href="#/ProjectPage">More Projects ...</a>
        </div>

    </div>
  )
}

export default Portfolio