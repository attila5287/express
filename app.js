const express = require('express');
const path = require('path');

// Sets up the Express App
const app = express();
// const PORT = 3000;
let PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Basic route that sends the user first to the AJAX Page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));


app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
