const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

// PATH CONFIGURATION TO RESPOND TO A REQUEST TO STATIC ROUTE REQUEST BY SERVING index.html
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(3000);
console.log('Server is listening on http://localhost:5000');
