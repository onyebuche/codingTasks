// Import the necessary libraries
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    // State to store the fetched custom message
    const [customMessage, setCustomMessage] = useState('');
    const [originalMessage, setOriginalMessage] = useState('Welcome to the React - Back-end Integration Task App');

    // Use useEffect to fetch the custom message when the component loads
    useEffect(() => {
        // Define an asynchronous function to fetch the message
        const fetchMessage = async () => {
            try {
                // Send a GET request to the backend API endpoint
                const response = await axios.get('http://localhost:5000/api/message');
                // Update the state with the fetched message
                setCustomMessage(response.data.message);
            } catch (error) {
                // Handle any errors that occur during the fetch
                console.error('Error fetching the message:', error);
            }
        };

        // Call the fetchMessage function
        fetchMessage();
    }, []); // Empty dependency array means this effect runs once when the component mounts

    return (
        <div className="App">
            <header className="App-header">
                {/* Display the original message */}
                <h1>{originalMessage}</h1>
                {/* Display the custom message or a loading message if the data is not yet fetched */}
                <h2>{customMessage || 'Loading custom message...'}</h2>
            </header>
        </div>
    );
}

export default App;
