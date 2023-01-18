/**
 * 
 */
const path = require('path');
const fs = require('fs');

const jsonPath1 = path.join(__dirname, '../data', 'songs.json');
const jsonData1 = fs.readFileSync(jsonPath1, 'utf8');
const songs = JSON.parse(jsonData1);


module.exports = {songs};