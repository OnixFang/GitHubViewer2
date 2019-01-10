var express = require('express');
var path = require('path');
var app = express();
var rootPath = path.normalize(__dirname + '/../');

app.use(express.static(rootPath + '/dist'));

app.get('*', (req, res) => { res.sendFile(rootPath + '/dist/GitHubViewer2/index.html'); });

app.listen(8010);
console.log('Listening on port 8010...');