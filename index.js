// A simple Express app that responds with "Hello, World!"
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Cloud Run expects listen on $PORT
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});