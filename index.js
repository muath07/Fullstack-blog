const express = require('express');
const app = express();

const Port = 3000;

app.get('/', (req, res) => {
  res.send('This is a fullstack try!');
});

app.listen(Port, () => {
 console.log('Server is running on http://localhost:' + Port);
});