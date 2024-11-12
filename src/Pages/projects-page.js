import React from 'react';
import '../App.css'; // Import your main CSS
import '../components/portfolio.css'; // Import CCS for the Projects your main CSS
// Import Project Images
import project1 from '../components/images/PokemonApp.png';
import project2 from '../components/images/RokApp1.png';
import logodefault from '../components/images/facebooklogo.png';
// Import Logos
import htmllogo from '../components/images/logos/html.svg';
import csslogo from '../components/images/logos/css.svg';
import jslogo from '../components/images/logos/javascript.svg';
import tslogo from '../components/images/logos/typescript.svg';
import jqlogo from '../components/images/logos/jquery.svg';
import reactlogo from '../components/images/logos/react.svg';
import gitlogo from '../components/images/logos/git.svg'
import vitelogo from '../components/images/logos/vite.svg';
import phplogo from '../components/images/logos/php.svg';
import figmalogo from '../components/images/logos/figma.svg';
import illustratorlogo from '../components/images/logos/illustrator.svg';
import photoshoplogo from '../components/images/logos/photoshop.svg';
import davincilogo from '../components/images/logos/davinci-resolve.svg';
import officelogo from '../components/images/logos/office.svg';
import analyticslogo from '../components/images/logos/google-analytics.svg';
import nodejslogo from '../components/images/logos/node-js.svg';
import designlogo from '../components/images/logos/ux-design.svg';
import researchlogo from '../components/images/logos/user-research.svg';

const Projects = () => {
  return (
      <div className='my-portfolio'>
      <h1>My Portfolio</h1>
        <a> These are my projects on which I try to work actively. </a>
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

      </div>

  );
};

export default Projects;