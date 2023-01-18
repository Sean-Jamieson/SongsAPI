const express = require('express');
const app = express();
const path = require('path');
app.use('/static', express.static(path.join(__dirname, 'public'))); 

const router = require('./scripts/router.js');
router.serveSongs(app);


let port = 8080;
app.listen(port, () => {
    console.log("server running at port= " + port);
});