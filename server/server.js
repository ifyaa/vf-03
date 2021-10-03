require('dotenv').config();
const express = require('express');
const http = require('http');
const path = require('path');
//const db = require('./plugins/mysql');

const app = express();
const port = process.env.SERVER_PORT || 3000;
const webServer = http.createServer(app);

app.use(express.static(path.join(__dirname, "../dist")));

webServer.listen(port, () => {
    console.log(`http://localhost:${port}`);
});