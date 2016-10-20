const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());

let tweets = [{ user: 'felicia', text: 'testing' },
              { user: 'dan',     text: 'testing testing' },
              { user: 'felicia', text: '3rd message' },
              { user: 'dan',     text: 'is going to make felicia breakfast tomorrow'}];

app.use('/', express.static(__dirname + '/../client/dist'));

app.listen(3000, () => {
  console.log('serving requests...');
})

app.get('/api/tweets', function(req, res) {
  res.send(tweets);
});

app.post('/api/tweets', function(req, res) {
  console.log('here', req.body)
  tweets.push(req.body);
  res.status(201).end();
})
