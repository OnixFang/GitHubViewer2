const express = require('express');
const path = require('path');
const app = express();
const rootPath = path.normalize(__dirname + '/../');
const appPath = rootPath + 'dist/';
const port = 8010;

app.use(express.static(appPath));

app.get('*', (req, res) => { res.sendFile(appPath + 'GitHubViewer2/index.html'); });

app.listen(process.env.PORT || port);
console.log('App running...');