const express = require('express');
const app = express();
const port = 3000;

// Sample data
const sampleData = {
    details: [
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Wizz_Air_logo_2015.svg/1280px-Wizz_Air_logo_2015.svg.png",
            flight_number: "W43636",
            from: "COPENHGA",
            arrival_hour: "11:20",
            flight_status: "LANDED",
            delay: "",
            terminal: "T4"
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Wizz_Air_logo_2015.svg/1280px-Wizz_Air_logo_2015.svg.png",
            flight_number: "W43640",
            from: "BASEL",
            arrival_hour: "12:25",
            flight_status: "LANDED",
            delay: "",
            terminal: "T4"
        }
    ]
};

// Define a GET endpoint
app.get('/api/data', (req, res) => {
    res.json(sampleData);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});