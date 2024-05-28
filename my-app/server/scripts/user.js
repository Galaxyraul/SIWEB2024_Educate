const bcrypt = require('bcrypt');

module.exports = function(app, db) {

    app.post('/register', async (req, res) => {
        const { nick, role, mail, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const query = `
        INSERT INTO users (nick, role, mail, password)
        VALUES (?, ?, ?, ?)
        `;

        db.query(query, [nick,1, mail, hashedPassword], (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error' });
            } else {
                res.status(201).json({ message: 'User registered successfully', id: results.insertId });
            }
        });
    });

    app.post('/login', (req, res) => {
        const { nick, password } = req.body;

        const query = `
        SELECT * FROM users WHERE nick = ?
        `;

        db.query(query, [nick], async (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'The user us not registered' });
        } else {
            if (results.length > 0) {
            const user = results[0];
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                res.status(200).json({ message: 'Login successful', user });
            } else {
                res.status(401).json({ message: 'Invalid credentials' });
            }
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        }
        });
    });
    
    app.post('/users/reduceBalance', (req, res) => {
        const { nick, amount } = req.body;

        const query = `
            UPDATE users
            SET balance = balance - ?
            WHERE nick = ?
        `;

        db.query(query, [amount, nick], (error, results) => {
            if (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
            } else {
            if (results.affectedRows > 0) {
                res.status(200).json({ message: 'Balance updated successfully' });
            } else {
                res.status(404).json({ message: 'User not found' });
            }
            }
        });
    });

    app.post('/editUser', (req, res) => {
        const { nick,mail, password } = req.body;

        let query = 'UPDATE users SET ';
        let params = [];

        if (mail) {
            query += 'mail = ?, ';
            params.push(mail);
        }

        if (password) {
            query += 'password = ?, ';
            params.push(password);
        }

        // Remove the last comma and space
        query = query.slice(0, -2);

        query += ' WHERE username = ?';
        params.push(nick);

        db.query(query, params, (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error' });
            } else {
                res.status(200).json({ message: 'User updated successfully' });
            }
        });
    });
};