const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the MySQL server.');
});

const getSubscriptions = (req, res) => {
  connection.query('SELECT * FROM subscriptions_type', (err, results) => {
    if (err) throw err;
    res.send(results);
  });
};

const getCoins = (req, res) => {
  connection.query('SELECT * FROM coins_packs', (err, results) => {
    if (err) throw err;
    res.send(results);
  });
};

const pay_s = (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
      return res.status(400).send('Missing name or price');
  }

  const query = 'INSERT INTO subscriptions (name, price) VALUES (?, ?)';
  connection.query(query, [name, price], (err, results) => {
      if (err) {
          console.error(err);
          return res.status(500).send('Server error');
      }

      res.send('Subscription inserted successfully');
  });
};

const pay_c = (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
      return res.status(400).send('Missing name or price');
  }

  const query = 'INSERT INTO coins (name, price) VALUES (?, ?)';
  connection.query(query, [name, price], (err, results) => {
      if (err) {
          console.error(err);
          return res.status(500).send('Server error');
      }
      res.send('Coins inserted successfully');
  });
} ;
module.exports = { getSubscriptions, getCoins, pay_s,pay_c };