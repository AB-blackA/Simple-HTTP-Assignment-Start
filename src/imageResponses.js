const fs = require('fs');
const path = require('path');

const imagePath = path.join(__dirname, '..', 'client', 'spongegar.png');

const getImage = (request, response) => {
  fs.readFile(imagePath, (err, data) => {
    response.writeHead(200, { 'Content-Type': 'image/png' });
    response.end(data);
  });
};

module.exports = {
  getImage,
};
