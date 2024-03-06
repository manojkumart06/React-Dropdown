// Import React hooks and styles
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS for styling
import './App.css'; // Import custom CSS for additional styling

// Define the main App component
function App() {
  // State hooks for managing component state
  // eslint-disable-next-line
  const [value, setValue] = useState(''); // Stores the selected option's value
  const [isShown, setIsShown] = useState(false); // Controls the visibility of the dropdown menu
  const [selectedOption, setSelectedOption] = useState('Select...'); // Stores the currently selected option, initialized to "Select..."

  // Options to be displayed in the dropdown
  const options = [
    { option: "Python" },
    { option: 'Java' },
    { option: 'C++' },
    { option: 'JavaScript' },
    { option: 'HTML' },
    { option: 'CSS' },
    { option: 'React' },
    { option: 'Node.js' },
    { option: 'SQL' },
    { option: 'MongoDB' },
    { option: 'Ruby' },
    { option: 'Swift' },
    { option: 'C#' },
    { option: 'PHP' },
    { option: 'Perl' },
    { option: 'Kotlin' },
    { option: 'Scala' },
    { option: 'TypeScript' }
  ];

  // Handles mouse entering the dropdown area, showing the dropdown content
  function handleMouseEnter() {
    setIsShown(true);
  }

  // Handles mouse leaving the dropdown area, hiding the dropdown content
  function handleMouseLeave() {
    setIsShown(false);
  }

  // Handles clicking an option in the dropdown, updating the selected value and hiding the dropdown
  function handleClick(e) {
    const selectedValue = e.target.getAttribute('value');
    setValue(selectedValue); // Update the value state with selected option
    setSelectedOption(selectedValue); // Update the selectedOption state to reflect the UI
    setIsShown(false); // Hide the dropdown menu
  }

  // Render function of the App component
  return (
    <div className="App">
      <h2>Choose a skill you want to learn?</h2>
      <div className="btn-group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          {selectedOption} {/* Display the currently selected option */}
        </button>
        <ul className={`dropdown-menu ${isShown ? 'show' : ''}`}> {/*Conditional class to show/hide dropdown*/}
          {options.map((choose, i) => (
            <li className="dropdown-item" key={i} onClick={handleClick} value={choose.option}>{choose.option}</li> // Map each option to a dropdown item
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App; // Export the App component for use in other parts of the application
