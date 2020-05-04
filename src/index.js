const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const engine = require('ejs-mate');
const app = express();
const path = require('path');
let server = http.createServer(app);

// SET VIEW ENGINE
app.set('views', path.join(__dirname, '../views/'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');

// SET PUBLIC FOLDER
app.use(express.static(path.join(__dirname, '../public/')));

// MIDDLEWARE
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

// ROUTES
app.use(require('./routes/index'));

// SOCKET CONFIG
module.exports.io = socketIO(server);
require('./socket/socketBackEnd');

app.get('/', (req, res) => {
    res.render('home');
});

server.listen(process.env.PORT || 3000, (err) => {
    if (err) throw new Error(err);
    console.log('servidor on');
});