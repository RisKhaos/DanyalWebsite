import React from 'react';
import '../App.css'; // Import your main CSS
import '../components/card.css'; // Import Card CSS file
import './contact-page.css';
import discordlogo from '../components/images/logos/discord.svg';
import cvlogo from '../components/images/logos/cv.svg';

const Contact = () => {// Import Card CSS file
  return (

    <div className="total-card">
      <div className="card contact-me">
        <h1>Contact Me</h1>
          <div className="socials">
            <a href="https://shorturl.at/5WdYR" >
              <div className='socials-content'>
                <img src='https://shorturl.at/dQU9T'></img>
                <a>Danyal Freitas</a>
              </div>
            </a>
            <a href="https://shorturl.at/u3HyF" >
              <div className='socials-content'>
                <img src='https://shorturl.at/6i1kH'></img>
                <a>R is Khaos</a>
              </div>
            </a>
            <a href="https://discord.gg/tWH8sVwbXH">
              <div className='socials-content'>
                <img src={discordlogo}></img>
                <a>RelaxItsDany</a>
              </div>

            </a>
            <a href="https://github.com/RisKhaos/DanyalWebsite/blob/main/src/components/images/CV_Danyal_Freitas_vB.pdf" type="application/pdf">
              <div className='socials-content'>
                <img src={cvlogo}></img>
                <a>Danyal K. Freitas</a>
              </div>
            </a>
          </div>
            <span>You can find me in the links above or via email to Danyal1017@gmail.com 
              <p>I usually respond within a day.</p>
            </span>
      </div>
    </div>

  );
};

export default Contact;