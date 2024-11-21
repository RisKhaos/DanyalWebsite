import React from 'react';
import './project.css'; // Import page CSS
// Import Project Images
import project2 from '../components/images/RokApp2.png';
// Import Project Logo
import projectlogo from '../components/images/roklogo.png';
// Import Logos
import figmalogo from '../components/images/logos/figma.svg';
import designlogo from '../components/images/logos/ux-design.svg';
import researchlogo from '../components/images/logos/user-research.svg';


const RokManager = () => {
  return (
      <div className='project-page'>
        {/* Project Image */}
        <div className='project-page-img'>
            <img src={project2}></img>
        </div>

        <div className='project-page-label'>
            <div className='project-page-logo'>
                <img src={projectlogo}></img>
                <h1>RoK Manager</h1>
            </div>
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
                {/* Project Description*/}
            <p>A web application to search and explore Pokémon details</p>
                {/* Open Project*/}
            <a href="https://shorturl.at/zWmDw">
                <button className='open-Project' >
                  Open ➤
                </button>
            </a>
        </div>
        <div className='project-page-details'>
                {/* Title*/}
            <h2>About Rok Manager</h2>
                {/* Project Details*/}
            <p>RoK Manager is a companion app for Rise of Kingdoms, offering essential tools to enhance gameplay. 
            It provides detailed guides on commanders, equipment, and resource management, all in one place. 
            Whether you're a new player or a seasoned leader, RoK Manager simplifies strategy and helps you 
            optimize your in-game experience.</p>
                {/* Title*/}
            <h2>Key Features:</h2>
                {/* Project Details*/}
            <ul>
                <p>➤ Commander Guides: Detailed breakdowns of commanders, their abilities, and optimal pairings.</p>
                <p>➤ Equipment Optimization: Information on the best equipment setups for each troop type.</p>
                <p>➤ Resource Management: Track and manage in-game resources with ease.</p>
                <p>➤ KvK Event Tracking: Stay updated on Kingdom vs. Kingdom events and battle seasons.</p>
                <p>➤ User-Friendly Interface: Intuitive design with streamlined navigation for both new and veteran players.</p>
                <p>➤ Screenshot Integration: Upload game screenshots for automatic resource tracking.</p>
            </ul>
        </div>

      </div>

  );
};

export default RokManager;