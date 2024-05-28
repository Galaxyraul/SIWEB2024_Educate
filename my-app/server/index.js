const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(express.json({ encoding: 'utf8' }));
app.use(express.json());
app.use(cors());
app.use('/pictures', express.static('pictures'));

const port = 5000;

const payments = require('./scripts/payments');
const categories = require('./scripts/categories');
const lectures = require('./scripts/lectures');
const user = require('./scripts/user');

const db = mysql.createPool({
  host: '127.0.0.1',
  port: 3319,
  user: 'bdd',
  password: 'bdd',
  database: 'bdd',
});

lectures(app, db);

payments(app, db);

categories(app, db);

user(app, db);
app.use('/resources', express.static('./resources'));

app.get('/tables', (req, res) => {
  db.promise().query('SHOW TABLES')
    .then(([rows, fields]) => {
      res.send(rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Server error');
    });
});

app.get('/categories', (req, res) => {
  db.promise().query('SELECT name FROM categories')
    .then(([rows, fields]) => {
      res.send(rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Server error');
    });
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});