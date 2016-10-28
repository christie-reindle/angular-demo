const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.static(__dirname + '/public'));

const movies = [
  {
    id: 1,
    title: 'Suicide Squad',
    year: 2016
  },
  {
    id: 2,
    title: 'The Shining',
    year: 1980
  },
  {
    id: 3,
    title: 'The Grudge',
    year: 2004
  },
  {
    id: 4,
    title: 'Roundhay Garden Scene',
    year: 1888
  },
  {
    id: 5,
    title: 'Traffic Crossing Leeds Bridge',
    year: 1888
  }
]

app.get('/api/movies', function(req, res) {
  res.json(movies);
});

app.get('*', function (req, res) {
  res.sendFile(`${__dirname}/public/index.html`);
});

app.listen(PORT, function() {
  console.log(`Listening on port`, PORT);
});