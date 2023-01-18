/**
 * 
 */
const data = require('./dataProvider.js');
const serveSongs = app => {
    app.get('/songs', (req,resp) => {resp.json(data.songs)});
};

module.exports = {serveSongs}