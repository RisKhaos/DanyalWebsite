import React from 'react';
import { useState , useRef, useEffect } from 'react';
import './experience.css'; // Import your CSS file
import '../App.css'; // Import your main CSS


const Experience = () => {
  // State to track the active button/year
  const [activeYear, setActiveYear] = useState(3); // If set to '0' = Year 1

  // Refs for layout and year divs
  const layoutRef = useRef(null);
  const yearRef = useRef([]);

  // Function to adjust layout height based on active year div
  const adjustLayoutHeight = () => {
    const activeDiv = yearRef.current[activeYear]; // Get the active year div
    if (activeDiv && layoutRef.current) {
      layoutRef.current.style.height = `${activeDiv.offsetHeight}px`; // Set layout height dynamically
    }
  };

  // Adjust the layout height whenever activeYear changes
  useEffect(() => {
    adjustLayoutHeight();
  }, [activeYear]);

  // Handler for button clicks to set the active year
  const handleClick = (year) => {
    setActiveYear(year);
  };

  return (
    <div className="experience">
      <h1>My Journey</h1>
      
      {/* Buttons for selecting different years */}
      <div className='journey-buttons'>
        <button
          className={`journey ${activeYear === 0 ? 'active' : ''}`}
          onClick={() => handleClick(0)}  // When clicked, set active year to 0 (Year 1)
        >
          2016-2020
        </button>
        <button
          className={`journey ${activeYear === 1 ? 'active' : ''}`}
          onClick={() => handleClick(1)}  // Set active year to 1 (Gap Year)
        >
          Gap Year
        </button>
        <button
          className={`journey ${activeYear === 2 ? 'active' : ''}`}
          onClick={() => handleClick(2)}  // Set active year to 2 (2021-2024)
        >
          2021-2024
        </button>
        <button
          className={`journey ${activeYear === 3 ? 'active' : ''}`}
          onClick={() => handleClick(3)}  // Set active year to 3 (2024)
        >
          2024
        </button>
      </div>

      {/* Layout to show the active year content */}
      <div className='layout' ref={layoutRef}>
        {/* Year 1 Content */}
        <div 
          className={`year ${activeYear === 0 ? 'show' : 'hide'}`} // Show this only if activeYear is 0
          ref={(el) => (yearRef.current[0] = el)}>
            I began my journey in 2016 with a degree in Audiovisual and Multimedia, where I discovered my passion for 
            web design and development. While in college, I took part-time jobs that improved my people management, 
            project management, and communication skills, helping me grow as a team player.
            <div className="timeline">
              <div className="timeline-item">
                <div className="circle , side1"><div className="inner-circle , inner-side1"></div></div>
                <div className="circle , side2"><div className="inner-circle , inner-side2"></div></div>
                <div className="circle , side3"><div className="inner-circle , inner-side3"></div></div>
                <div className='year-timeline'>
                  <div className='jobs'>
                    <h2>ESCS - Escola Superiror de Comunicação Social</h2>
                    <h3>Degree in Audiovisual & Multimedia</h3>
                    <a>September, 2016 - July, 2020</a>
                    <p>- Mastered digital storytelling, gained experience in <b>video</b> production and <b>audio</b> editing, 
                    created graphics with <b>Photoshop</b> and <b>Illustrator</b>, and learned <b>HTML</b>, <b>CSS</b>, 
                    <b>JavaScript</b>, and <b>PHP</b>.</p>
                  </div>
                  <div className='jobs'>
                    <h2>Mundi Consulting</h2>
                    <h3>IT & HR Assistant, Part-time</h3>
                    <a>June, 2017 - July, 2020</a>
                    <p>- Organized projects and tracked data using the SIGO platform.</p>
                  </div>
                  <div className='jobs'>
                    <h2>Top Rackets</h2>
                    <h3>Administrative Secretary, Part-time</h3>
                    <a>October, 2017 - October, 2021</a>
                    <p>- Managed public communication and daily operations.</p>
                  </div>
                </div>
              </div>  
            </div>
        </div>

        {/* Gap Year Content */}
        <div 
          className={`year ${activeYear === 1 ? 'show' : 'hide'}`} // Show this only if activeYear is 1
          ref={(el) => (yearRef.current[1] = el)}>
            During COVID, I took a gap year, explored e-sports, and completed a digital marketing internship. 
            It gave me valuable experience working under pressure and collaborating with international teams.
            <div className="timeline-a">
              <div className="timeline-item">
                <div className="circle , side1-a"><div className="inner-circle"></div></div>
                <div className="circle , side2-a"><div className="inner-circle"></div></div>
                <div className="circle , side3-a"><div className="inner-circle"></div></div>
                <div className='year-timeline'>
                  <div className='jobs'>
                    <h2>New Dawn Esports</h2>
                    <h3>Esports Manager</h3>
                    <a>June, 2020 - October, 2020</a>
                    <p>- Oversee team operations, strategy development, and player management.</p>
                  </div>
                  <div className='jobs'>
                    <h2>Nervous Gaming</h2>
                    <h3>Head Esports Manager</h3>
                    <a>October, 2020 - February, 2021</a>
                    <p>- Lead team operations, strategy and player management to success in competitive gaming.</p>
                  </div>
                  <div className='jobs'>
                    <h2>Mundi Consulting</h2>
                    <h3>Digital Marketing, Internship</h3>
                    <a>December, 2020 - May, 2021</a>
                    <p>- Managed social media, created engaging content, and analyzed campaign results.</p>
                  </div>
                </div>
              </div>  
            </div>


        </div>

        {/* Year 3 Content */}
        <div 
          className={`year ${activeYear === 2 ? 'show' : 'hide'}`} // Show this only if activeYear is 2
          ref={(el) => (yearRef.current[2] = el)}>
          After my gap year, I started my Master’s in Multimedia to further develop my skills and gain insights 
          and experience in web design and development. I focused on improving my UI design, enhancing my user 
          experience capabilities, and complementing my coding skills.
          <div className="timeline-b">
              <div className="timeline-item">
                <div className="circle , side1-b"><div className="inner-circle "></div></div>
                <div className="circle , side2-b"><div className="inner-circle "></div></div>
                <div className='year-timeline'>
                  <div className='jobs'>
                    <h2>Top Rackets</h2>
                    <h3>Administrative Secretary</h3>
                    <a>October, 2017 - October, 2021</a>
                    <p>- Managed public communication and daily operations.</p>
                  </div>
                  <div className='jobs'>
                    <h2>ESCS - Escola Superiror de Comunicação Social</h2>
                    <h3>Masters in Multimedia</h3>
                    <a>September, 2021 - October, 2024</a>
                    <p>- Focus on user-centered design, <b>usability testing</b>, and creating wireframes. I've developed skills
                       in <b>UI/UX</b>, visual design, and <b>web development</b>, including HTML, CSS, JavaScript, <b>jQuery</b>, and <b>React</b>.</p>                  
                  </div>
                </div>
              </div>  
            </div>
        </div>

        {/* Year 4 Content */}
        <div 
          className={`year ${activeYear === 3 ? 'show' : 'hide'}`} // Show this only if activeYear is 3
          ref={(el) => (yearRef.current[3] = el)}>
          In 2024, I finished my master’s thesis project and began developing my skills outside of college, through 
          certifications and solo projects where I could apply my knowledge and continue learning.
          <div className="timeline-c">
              <div className="timeline-item">
                <div className="circle , side1-c"><div className="inner-circle "></div></div>
                <div className="circle , side2-c"><div className="inner-circle "></div></div>
                <div className="circle , side3-c"><div className="inner-circle "></div></div>
                <div className="circle , side4-c"><div className="inner-circle "></div></div>
                <div className='year-timeline'>
                  <div className='jobs'>
                    <h2>ESCS - Escola Superiror de Comunicação Social</h2>
                    <h3>Masters in Multimedia</h3>
                    <a>September, 2021 - October, 2024</a>
                    <p>- Focus on user-centered design, <b>usability testing</b>, and creating wireframes. I've developed skills
                       in <b>UI/UX</b>, visual design, and <b>web development</b>, including HTML, CSS, JavaScript, <b>jQuery</b>, and <b>React</b>.</p>                  
                  </div>
                  <div className='jobs'>
                    <h2>Mundi Consulting</h2>
                    <h3>Teaching Aptitude - Certificate</h3>
                    <a>April 2024</a>
                    <p>- Ability of teaching and exposing projects.</p>                  
                  </div>
                  <div className='jobs'>
                    <h2>freeCodeCamp</h2>
                    <h3>Responsive Web Design - Certificate</h3>
                    <a>October 2024</a>
                    <p>- HTML and CSS coding skills.</p>                  
                  </div>
                  <div className='jobs'>
                    <h2>freeCodeCamp</h2>
                    <h3>JavaScript - Certificate</h3>
                    <a>October 2024</a>
                    <p>- JavaScript and Algorithms skills.</p>                  
                  </div>
                </div>
              </div>  
            </div>
        </div>
      </div>
    </div>
  );

  };
  
  

export default Experience;