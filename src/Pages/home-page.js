import React from 'react';
import Card from '../components/card';
import Programs from '../components/programs';
import Experience from '../components/experience';
import Portfolio from '../components/portfolio';
import '../App.css'; // Import your main CSS

const Homepage = () => {
  return (
    <div className="Body">
      <main className="content">
        <Card />
        <Programs />
        <Experience />
        <Portfolio />
      </main>
    </div>
  );
};

export default Homepage;