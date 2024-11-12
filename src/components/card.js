import React from 'react';
import './card.css'; // Import your CSS file
import '../App.css'; // Import your main CSS

const Card = () => {
  return (
    <div className="total-card">
    <div className="card">
    <div className="info">
            <div className="toprow">
                <h1 class="name">Danyal Freitas</h1>
                <div className="connects">
                    <a href="https://www.linkedin.com/in/danyal-freitas-825328124/" >
                        <div className="card1">
                            <img src='https://shorturl.at/dQU9T'></img>
                        </div>
                    </a>
                    <a href="https://github.com/RisKhaos" >
                        <div className="card1">
                            <img src='https://shorturl.at/6i1kH'></img>
                        </div>
                    </a>
                    <a href="https://www.twitch.tv/relaxitsdany">
                        <div className="card1">
                            <img src='https://shorturl.at/VG0bd'></img>
                        </div>
                    </a>
                </div>
            </div>
            <div className="botrow">
                <img src='https://shorturl.at/em550'></img>
                <span>Lisbon, Portugal</span>
            </div>
        </div>
        <div className="bio">I'm a Master's graduate in Multimedia. I have been in love with the idea of creating websites and apps, so I have been designing and programming as a hobby throughout my college years.</div>
    </div>
    </div>
  );
};

export default Card;
