const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();

require('./service.config').cors(app,express);

// require('./../controller/user.controller')(app);
var files = fs.readdirSync('./server/controller');
// 避免手动require controller文件
files.forEach(function (file) {
	if (file.indexOf('.controller') < 0) return;
	require('./../controller/' + file)(app);
});

app.listen(1700);
console.log('service is running in localhost:1700');