import './App.css'; // Import your main CSS
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/home-page.js';
import About from './Pages/about-page.js';
import Layout from './layout.js';
import Projects from './Pages/projects-page.js';
import Contact from './Pages/contact-page.js';
import PokemonApp from './Pages/project-pokemonapp-page.js';
import RokManager from './Pages/project-rokmanager-page.js';
import Toogle from "./components/toogle.js";
import { useState, useEffect } from 'react'; // Import useState for change to dark mode & useEffect for side effects
import useLocalStorage from 'use-local-storage'; // Import Storage to keep track of the mode picked

const App = () => {
  const PreferenceMode = window.matchMedia("(prefers-color-scheme:dark )").matches;
  const [isDark, setIsDark] = useLocalStorage(false);
    // Use useEffect to set data-theme on the body
    useEffect(() => {
      document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    }, [isDark]);
  return (
    <div className='App' data-theme={isDark ? "dark" : "light"}>
      <Toogle 
        isChecked={isDark} // Ensure correct prop name
        handleChange={() => setIsDark(!isDark)} // Toggle the theme
      />
    <Router>
      <Routes>
        <Route element={<Layout/>}> 
          <Route path="/" element={<Homepage />} /> {/* Default route */}
          <Route path='/AboutPage' element={<About/>}/>
          <Route path='/ProjectPage' element={<Projects/>}/>
          <Route path='/ContactsPage' element={<Contact/>}/>
          <Route path='/PokemonApp' element={<PokemonApp/>}/>
          <Route path='/RokManager' element={<RokManager/>}/>
        </Route>
      </Routes>
    </Router>
    </div>
  );
};

export default App;

