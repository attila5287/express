const fs = require('fs');
const express = require('express');
const path = require('path');

// Sets up the Express App
const app = express();
// const PORT = 5000;
let PORT = process.env.PORT || 5000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/api")(app);

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
