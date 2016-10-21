const fs = require('fs');
const sqlite = require('sqlite3');

const filepath = './database.db';

let db = new sqlite.Database(filepath);

db.serialize(() => {
  if (!fs.existsSync(filepath)) {
    db.run('CREATE TABLE Tweets (user TEXT, text TEXT)');

    db.run('INSERT INTO Tweets VALUES (?, ?)', ['felicia', 'hello twitter world']);
  }
});

module.exports = db;
