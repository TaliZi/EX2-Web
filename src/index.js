import React from 'react'; // Importing React library
import ReactDOM from 'react-dom/client'; // Importing ReactDOM for rendering
import './index.css'; // Importing CSS file
import App from './App'; // Importing the main App component
import reportWebVitals from './reportWebVitals'; // Importing function for reporting web vitals

// Creating a root element using ReactDOM.createRoot and specifying the root element with the id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the main App component inside a React StrictMode, which performs additional checks and warnings for potential issues
root.render(
  <React.StrictMode>
    <App /> {/* Rendering the main App component */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, you can pass a function to log results or send them to an analytics endpoint
// This function reports web vitals, such as performance metrics, to the console or an analytics endpoint
// You can learn more about this feature at the provided URL
reportWebVitals()

