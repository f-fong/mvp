const express = require('express');
const bodyParser = require('body-parser');

let db = require('./database');
let app = express();

app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/../client/dist'));


app.get('/api/tweets', function(req, res) {
  db.all('SELECT * FROM Tweets', (err, rows) => {
    res.send(rows);
  });
});

app.post('/api/tweets', function(req, res) {
  console.log('here', req.body)
  tweets.push(req.body);
  res.status(201).end();
});


app.listen(3000, () => {
  console.log('serving requests...');
});
