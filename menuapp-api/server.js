// Actual HTTP server

import app from './express.js';     // HTTP Requests run through this

// The frontend is running on 3000, 
// Seperate backend server starts with the port 3004.
const port = process.env.PORT || 3004;

app.listen(port, (err) => {
    if (err) console.log(err);
    console.info(`Server started on port ${port}.`);
})