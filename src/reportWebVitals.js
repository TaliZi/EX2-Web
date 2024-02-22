// Define a function named reportWebVitals that takes a single argument onPerfEntry
const reportWebVitals = onPerfEntry => {
  // Check if onPerfEntry is provided and is a function
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // If onPerfEntry is provided and is a function, dynamically import the web-vitals library
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Once the web-vitals library is imported, call its functions to measure various performance metrics
      // Pass the provided onPerfEntry function as a callback to these functions to report the metrics
      getCLS(onPerfEntry); // Cumulative Layout Shift (CLS)
      getFID(onPerfEntry); // First Input Delay (FID)
      getFCP(onPerfEntry); // First Contentful Paint (FCP)
      getLCP(onPerfEntry); // Largest Contentful Paint (LCP)
      getTTFB(onPerfEntry); // Time to First Byte (TTFB)
    });
  }
};

// Export the reportWebVitals function as the default export of this module
export default reportWebVitals;
