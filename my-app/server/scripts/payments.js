module.exports = function(app, db) {

 app.get('/coins_pack', (req, res) => {
    db.promise().query('SELECT * FROM coins_pack ORDER BY quantity ASC')
      .then(([rows, fields]) => {
        res.send(rows);
      })
      .catch(err => {
        console.error(err);
        res.status(500).send('Server error');
      });
});


  app.get('/subscription_types', (req, res) => {
    db.promise().query('SELECT * FROM subscription_types ORDER BY coins_per_day ASC')
      .then(([rows, fields]) => {
        res.send(rows);
      })
      .catch(err => {
        console.error(err);
        res.status(500).send('Server error');
      });
});

  app.post('/purchases/insert', (req, res) => {
    const { user_nick, coin_pack_name } = req.body;
    const purchase_date = new Date();

    const query = `
      INSERT INTO purchases (user_nick, coin_pack_name, purchase_date)
      VALUES (?, ?, ?)
    `;

    db.query(query, [user_nick, coin_pack_name, purchase_date], (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(201).json({ message: 'Purchase recorded successfully', id: results.insertId });
      }
    }).catch(err => { return []; });
  });

  app.post('/subscriptions/insert', (req, res) => {
    const { user_nick, subscription_name} = req.body;
    const start_date = new Date();
    const query = `
      INSERT INTO subscriptions (user_nick, subscription_name)
      VALUES (?, ?)
    `;

    db.query(query, [user_nick, subscription_name], (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(201).json({ message: 'Subscription recorded successfully', id: results.insertId });
      }
    }).catch(err => { return []; });
  });
  
}