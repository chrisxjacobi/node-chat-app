// added new chat application folder,

const express = require('express');
var app = express();

const port = process.env.PORT || 3000;
const path = require('path');
const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath))

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});





// console.log(__dirname + '/../public');
// console.log(publicPath);
