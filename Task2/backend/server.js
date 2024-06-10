// Import the necessary libraries
const express = require('express');
const cors = require('cors');

// Initialize the Express application
const app = express();

// Define the port number for the server
const PORT = process.env.PORT || 5000;

// Enable Cross-Origin Resource Sharing (CORS) to allow communication between the front end and back end
app.use(cors());

// Define the route to retrieve the custom message
app.get('/api/message', (req, res) => {
    // Define the custom message to be sent as a response
    const data = { message: 'Hello from the back end!' };
    // Send the custom message as a JSON response
    res.json(data);
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
