// Actual HTTP server

import app from './express.js';     // HTTP Requests run through this

// the frontend is on 3000, 
// seperate backend server start with the port 3004.
const port = process.env.PORT || 3004;

app.listen(port, (err) => {
    if (err) console.log(err);
    console.info(`Server started on port ${port}.`);
})