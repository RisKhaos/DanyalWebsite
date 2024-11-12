import React from 'react';
import './project.css'; // Import page CSS
// Import Project Images
import project1 from '../components/images/PokemonApp.png';
// Import Project Logo
import projectlogo from '../components/images/charmander.svg';
// Import Logos
import tslogo from '../components/images/logos/typescript.svg';
import reactlogo from '../components/images/logos/react.svg';
import vitelogo from '../components/images/logos/vite.svg';
import nodejslogo from '../components/images/logos/node-js.svg';


const PokemonApp = () => {
  return (
      <div className='project-page'>
        {/* Project Image */}
        <div className='project-page-img'>
            <img src={project1}></img>
        </div>

        <div className='project-page-label'>
            <div className='project-page-logo'>
                <img src={projectlogo}></img>
                <h1>Pokemon Search App</h1>
            </div>
            <div className='project-programs'>
               {/* Add Programs Used */}
                <div className='program-used'>
                    <img src={vitelogo}></img>
                    <span>Vite</span>S
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
                {/* Project Description*/}
            <p>A web application to search and explore Pokémon details</p>
                {/* Open Project*/}
            <a href="#/ProjectPage">
                <button className='open-Project' >
                  Open ➤
                </button>
            </a>
        </div>
        <div className='project-page-details'>
                {/* Title*/}
            <h2>Welcome to the Pokémon Search App!</h2>
                {/* Project Details*/}
            <p>Dive into the fascinating world of Pokémon with our user-friendly application designed 
            for trainers and fans alike. Whether you're a seasoned Pokémon Master or just starting your 
            journey, our app provides an extensive database of Pokémon information at your fingertips.</p>
                {/* Title*/}
            <h2>Key Features:</h2>
                {/* Project Details*/}
            <ul>
                <p>➤ Search Functionality: Quickly find Pokémon by name or Pokédex number.</p>
                <p>➤ Detailed Profiles: Access comprehensive information on each Pokémon stats.</p>
                <p>➤ User-Friendly Interface: Enjoy a seamless experience on both desktop and mobile.</p>
            </ul>
        </div>


      </div>

  );
};

export default PokemonApp;