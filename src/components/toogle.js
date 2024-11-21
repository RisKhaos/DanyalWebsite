import React from 'react';
import '../components/toogle.css'; // Import CSS file
import '../App.css'; // Import your main CSS

const Toogle = ({ handleChange, isChecked }) => {
  return (
    <div className='toogle-container'>
      <input
        type="checkbox"
        id="toogle" // Make sure this matches the label htmlFor
        className='toogle'
        checked={isChecked} // This should reflect the checked state
        onChange={handleChange} // Use handleChange here
      />
      <label htmlFor="toogle">Dark Mode</label> {/* Match id here */}
    </div>
  );
};

export default Toogle