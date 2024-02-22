# Ex2-web

## This project is the front end of the web application of facebook.

### Made by: Tali Zikel, Aviya Megiddo Shaked, and Michal Magid.

### In this task, we were divided into subgroups.
### Tali made the app on Android,
### Aviya and Michal made the web site.
### We preferred to divide the work in this way to optimize our time.

## Run:
npm cache clean --force

npm install

npm start


## components:
### Login.js:
This script is invoked when the URL path is set to "/".
The code defines a React component named Login, which serves as a login form for a web application, a Facebook-like social media platform. Users can input their username and password, and upon clicking the login button, the credentials are validated against a JSON data source (userData) containing user information. If the username or password is incorrect or missing, appropriate error messages are displayed. Successful login triggers an alert message and redirects the user to a feed page. In addition,  there's an option to navigate to a registration page to create a new account.

### Registration.js
This code represents a React component for user registration. It provides a form where users can input their username, password, confirm password, display name, and upload a profile image. The component includes validation checks to ensure that all fields are filled, passwords match, and the password meets the minimum length requirement. Upon successful registration, the user's data is stored in local storage, and the form fields are cleared. If any errors occur during registration, appropriate error messages are displayed.

### Feed.js
This React component, titled "Feed," represents a social media feed interface. It allows users to view, interact with, and manage posts and comments. Users can add new posts, like/unlike existing posts, delete their own posts, edit their own posts, add comments to posts, and toggle between light and dark modes. The feed supports filtering posts by username, sorting posts by date or popularity, and includes a sliding navigation menu for additional user options such as settings, support, and logout. The component gets the initial data from a JSON file and utilizes local storage to maintain user data for actions like posting and commenting.

## Others:
### App.js
This code represents a React application utilizing React Router for navigation. It consists of three main components: Registration, Login, and Feed. The application incorporates a theme toggler button that switches between light and dark themes when clicked. The BrowserRouter component from React Router wraps the entire application, enabling navigation between different routes defined by the Route components. When the user navigates to '/login', the Login component is rendered; when navigating to '/registration', the Registration component is rendered, and when navigating to '/feed', the Feed component is rendered. The theme state is managed using React's useState hook, and toggling between light and dark themes is handled by the toggleTheme function. Overall, the code sets up a basic React application with routing and theme toggling functionality.

### App.css
This code snippet defines styles for a web application. It sets the text alignment to center, styles a logo with animation (a spinning effect unless motion is reduced), and configures the layout of the application header to be centered vertically and horizontally with a minimum height of the viewport. Additionally, it defines colors and sizes for various elements. Overall, the aim is to create a visually appealing and responsive layout for a web application with a spinning logo animation.

### App.test.js
This code comprises a series of tests for a registration form component in a React application. Each test aims to verify different aspects of the component's behavior, such as rendering the form correctly, initializing form fields with empty values, handling form submission with valid and invalid inputs, and displaying appropriate error messages for various scenarios. The tests simulate user interactions like filling out the form, clicking buttons, and uploading files, while asserting expected outcomes such as the presence of certain UI elements and the absence of error messages under specific conditions. Additionally, it mocks certain functionalities like URL creation to isolate the testing scope and ensure consistent behavior. Overall, the goal of this code is to ensure the proper functionality and user experience of the registration form component through comprehensive unit testing.

### index.js
This code sets up a React application by rendering the root component (App) within a strict mode provided by React.StrictMode. It uses ReactDOM.createRoot to create a root instance for rendering React components. The App component serves as the main entry point for the application. Additionally, it includes functionality to report web vitals for performance measurement, which can be logged to the console or sent to an analytics endpoint. The reportWebVitals function is called to initiate this performance measurement process. Overall, this code initializes the React application, ensuring that it adheres to best practices and measures its performance for optimization purposes.

### index.css
This code defines the styles for a web application with both light and dark themes. It includes styling for login and feed components. The login section has a container with input fields, a toggle button for theme switching, and styling for buttons and profile images. The feed section includes a container for posts, with individual post styling, including titles, content, and post dates. Additionally, it includes a sliding menu for navigation with specific menu items styled accordingly. Overall, the code aims to provide a visually appealing and functional user interface for a web application with support for light and dark themes.

### data.json
This file hold the data of all the static posts.
This code represents a dataset containing information about users and comments. Each user has a name, email, message, image (currently empty), and date associated with their activity. Similarly, comments include details such as the commenter's name, email, message, image (also empty), and date, along with the email of the user they are commenting for. 

### reportWebVitals.js
This code defines a function called reportWebVitals which takes a callback function onPerfEntry as a parameter. If onPerfEntry is provided and is a function, the code dynamically imports the web-vitals library. Once imported, it uses the library's functions (getCLS, getFID, getFCP, getLCP, getTTFB) to measure various performance metrics (such as Cumulative Layout Shift, First Input Delay, First Contentful Paint, Largest Contentful Paint, and Time to First Byte) of the web application. These metrics are then passed to the onPerfEntry callback function for further processing or reporting. This setup enables developers to monitor and analyze key performance indicators of their web applications and take appropriate optimization measures.

### setupTests.js
This code snippet imports and sets up the jest-dom library, which extends Jest's capabilities for testing DOM nodes in JavaScript code. By adding custom matchers, it enables developers to write more expressive and readable assertions when testing DOM elements in Jest tests. This setup enhances the testing experience by providing additional functionality, such as checking for specific text content within elements using regular expressions. The aim of this code is to improve the effectiveness and clarity of unit tests for DOM-related functionality in JavaScript applications.
