import React from 'react';
import './programs.css'; // Import your CSS file
import '../App.css'; // Import your main CSS
// Import images
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


const Programs = () => {
  return (
    <div className="programs">
        <h1>Programs I work with</h1>
        <div className='toprow1 .marquee-container'>
            <div className='row animate-marquee'>
                <div className='inside'> <img src={htmllogo}/> HTML</div>
                <div className='inside'> <img src={csslogo}/> CCS</div>
                <div className='inside'> <img src={jslogo}/> JavaScript</div>
                <div className='inside'> <img src={tslogo}/> TypeScript</div>
                <div className='inside'> <img src={reactlogo}/> React</div>
                <div className='inside'> <img src={gitlogo}/> Git</div>
                {/* Duplicator */}
                <div className='inside'> <img src={htmllogo}/> HTML</div>
                <div className='inside'> <img src={csslogo}/> CCS</div>
                <div className='inside'> <img src={jslogo}/> JavaScript</div>
                <div className='inside'> <img src={tslogo}/> TypeScript</div>
                <div className='inside'> <img src={reactlogo}/> React</div>
                <div className='inside'> <img src={gitlogo}/> Git</div>
                {/* Duplicator */}
                <div className='inside'> <img src={htmllogo}/> HTML</div>
                <div className='inside'> <img src={csslogo}/> CCS</div>
                <div className='inside'> <img src={jslogo}/> JavaScript</div>
                <div className='inside'> <img src={tslogo}/> TypeScript</div>
                <div className='inside'> <img src={reactlogo}/> React</div>
                <div className='inside'> <img src={gitlogo}/> Git</div>               
            </div>
        </div>
        <div className='toprow1 .marquee-container'>
            <div className='row animate-marquee'>
                <div className='inside'> <img src={figmalogo}/> Figma</div>                  
                <div className='inside'> <img src={illustratorlogo}/> Illustrator</div>                
                <div className='inside'> <img src={photoshoplogo}/> Photoshop</div>
                <div className='inside'> <img src={davincilogo}/> DaVinciResolve</div>
                <div className='inside'> <img src={nodejslogo}/> Node.js</div>
                {/* Duplicator */}
                <div className='inside'> <img src={figmalogo}/> Figma</div>                  
                <div className='inside'> <img src={illustratorlogo}/> Illustrator</div>                
                <div className='inside'> <img src={photoshoplogo}/> Photoshop</div>
                <div className='inside'> <img src={davincilogo}/> DaVinciResolve</div>
                <div className='inside'> <img src={nodejslogo}/> Node.js</div>
                {/* Duplicator */}
                <div className='inside'> <img src={figmalogo}/> Figma</div>                  
                <div className='inside'> <img src={illustratorlogo}/> Illustrator</div>                
                <div className='inside'> <img src={photoshoplogo}/> Photoshop</div>
                <div className='inside'> <img src={davincilogo}/> DaVinciResolve</div>
                <div className='inside'> <img src={nodejslogo}/> Node.js</div>
                
            </div>
        </div>
        <div className='toprow1 .marquee-container'>
            <div className='row animate-marquee'>
                <div className='inside'> <img src={officelogo}/> Microsoft Office</div>
                <div className='inside'> <img src={analyticslogo}/> Analyitcs</div>
                <div className='inside'> <img src={vitelogo}/> Vite</div>
                <div className='inside'> <img src={phplogo}/> PhP</div>
                <div className='inside'> <img src={jqlogo}/> JQuery</div>
                {/* Duplicator */}
                <div className='inside'> <img src={officelogo}/> Microsoft Office</div>
                <div className='inside'> <img src={analyticslogo}/> Analyitcs</div>
                <div className='inside'> <img src={vitelogo}/> Vite</div>
                <div className='inside'> <img src={phplogo}/> PhP</div>
                <div className='inside'> <img src={jqlogo}/> JQuery</div>
                {/* Duplicator */}
                <div className='inside'> <img src={officelogo}/> Microsoft Office</div>
                <div className='inside'> <img src={analyticslogo}/> Analyitcs</div>
                <div className='inside'> <img src={vitelogo}/> Vite</div>
                <div className='inside'> <img src={phplogo}/> PhP</div>
                <div className='inside'> <img src={jqlogo}/> JQuery</div>
                
            </div>
        </div>
    </div>
  );
};

export default Programs;