import React from 'react';
import '../App.css'; // Import your main CSS
import './about-page.css'; // Import CSS

const About = () => {
  return (
    <main className="content About-Page">
      <section className='About-Me'>
        <h1>
            About Me
        </h1>
        <a>
        I’m Danyal Freitas, a recent Master’s graduate in Multimedia, specializing in UI/UX design and front-end development. 
        I’ve developed strong skills in creating user-centered digital experiences, working with HTML, CSS, JavaScript, 
        jQuery, and React. My academic background, paired with internships and part-time jobs, has also equipped me with 
        valuable experience in project management, teamwork, and communication.
        <p />
        Through hands-on user research, usability testing, and prototyping, I’ve learned to balance user needs with 
        functional design. Now, after completing my degree, I’m focused on further developing my skills through solo projects 
        and certifications, eager to take on new challenges and contribute to innovative projects.
        </a>

      </section>
      <section className='About-Work'>
        <h1>
            Work Experience
        </h1>
        <div className="timeline-work">
            <div className="timeline-item">
                <div className="work-circle , work-side1"><div className="work-inner-circle "></div></div>
                <div className="work-circle , work-side2"><div className="work-inner-circle "></div></div>
                <div className="work-circle , work-side3"><div className="work-inner-circle "></div></div>
                <div className='year-timeline'>
                  <div className='work-jobs'>
                    <h2>Mundi Consulting</h2>
                    <h3>IT & HR Assistant</h3>
                    <a>Part-time / June, 2017 - July, 2020</a>
                    <p>- Organized projects and tracked data using the SIGO platform.</p>                  
                  </div>
                  <div className='work-jobs'>
                    <h2>Top Rackets</h2>
                    <h3>Administrative Secretary</h3>
                    <a>Part-time / October, 2017 - October, 2021</a>
                    <p>- Managed public communication and daily operations.</p>                  
                  </div>
                  <div className='work-jobs'>
                    <h2>Mundi Consulting</h2>
                    <h3>Digital Marketing</h3>
                    <a>Internship / December, 2020 - May, 2021</a>
                    <p>- Managed social media, created engaging content, and analyzed campaign results.</p>                  
                  </div>
                </div>
            </div>  
        </div>
      </section>
      <section className='About-Journey'>
        <h1>
            Journey
        </h1>
        <div className="timeline-journey">
          <div className='timeline-journey-item1'>
          <h2>
            Multimedia Beginings
          </h2>
          <p>
            My skills development began in college, where I worked as a Video Editor & Web Developer for RTP 2’s E2 (2018-2019), 
            refining my editing and web development skills. As a Videographer for events like 21º Tuna M’Isto (2017) and Nossa 
            Língua (2020), I improved my visual storytelling. I also created a podcast for ESCS FM in 2018, enhancing my content 
            creation abilities.
          </p>
          </div>
          <div className='timeline-journey-item2'>
          <h2>
            Gap year
          </h2>
          <p>
            I entered the e-sports world, taking leadership roles. As Head Esports Manager for 
            Nervous Gaming (2020-2021) and League Manager for OWL Esports and New Dawn Esports (2020), I developed strong 
            management and communication skills, learning to handle fast-paced environments and team coordination.
          </p>
          </div>
          <div className='timeline-journey-item3'>
          <h2>
            Current State
          </h2>
          <p>
            In my Master’s in Multimedia, I focused on UI/UX design and web development, mastering tools like HTML, 
            CSS, JavaScript, jQuery, and React. I also pursued certifications and solo projects, further enhancing my 
            skills as I prepare to take on new challenges in web design and development.
          </p>
          </div>
        </div>
        </section>
    </main>
  );
};

export default About;