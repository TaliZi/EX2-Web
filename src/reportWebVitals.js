import React from 'react'; // Importing React library
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Importing BrowserRouter, Route, and Routes components from react-router-dom
import Registration from './components/Registration'; // Importing Registration component
import Login from './components/Login'; // Importing Login component
import Feed from './components/Feed'; // Importing Feed component
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS

function App() {
  const [theme, setTheme] = React.useState('light'); // Using React.useState to create state variable 'theme' with initial value 'light'

  const toggleTheme = () => { // Defining a function to toggle the theme
    setTheme(theme === 'light' ? 'dark' : 'light'); // If theme is 'light', set it to 'dark', otherwise set it to 'light'
  };
  
  return (
    <BrowserRouter> {/* Using BrowserRouter to enable routing */}
      <div className={theme}> {/* Setting the class name of the div based on the theme */}
        <button onClick={toggleTheme} className='toggle' >{(theme === 'light' ? 'dark' : 'light')}</button> {/* Button to toggle theme */}
     
        <Routes> {/* Using Routes component to define routes */}
          <Route path="/login" element={<Login />} /> {/* Route for Login component */}
          <Route path="/registration" element={<Registration />} /> {/* Route for Registration component */}
          <Route path="/feed" element={<Feed />} /> {/* Route for Feed component */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App; // Exporting the App component as default