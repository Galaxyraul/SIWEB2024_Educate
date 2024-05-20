const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './resources/lectures/');
    },
    filename: function(req, file, cb) {
        cb(null,file.originalname.replace(/[^a-zA-Z0-9-_.]/g, ''));
    }
});

const upload = multer({ storage: storage });

module.exports = function(app, db) {
    app.get('/lectures', async (req, res) => {
        const [lectures] = await db.promise().query('SELECT * FROM lectures').catch(err => { return []; });
        res.json(lectures);
    });

    app.get('/lectures/:category', async (req, res) => {
        const { category } = req.params;
        const [subcategories] = await db.promise().query('SELECT name, description FROM lectures INNER JOIN categories_lectures ON lectures.name = categories_lectures.lecture_name WHERE categories_lectures.category_name = ?', [category]).catch(err => { return []; });
        res.json(subcategories);
    });

    app.post('/lectures/upload', upload.single('file'), (req, res) => {
        res.json({ message: 'File uploaded successfully' });
    });

    app.post('/lectures/insert', (req, res) => {
    const { title, description, tags, creator, fileName } = req.body;
    const filePath = `lectures/${fileName.replace(/[^a-zA-Z0-9-_.]/g, '')}`;
    const query = 'INSERT INTO lectures (name, creator, description, path) VALUES (?, ?, ?, ?)';
    db.query(query, [title, creator, description, filePath], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        const lectureId = result.insertId;
        tags.forEach(tag => {
            const query = 'INSERT INTO categories_lectures (category_name, lecture_name) VALUES (?, ?)';
            db.query(query, [tag, title], (err, result) => {
                if (err) {
                    return res.status(500).send(err);
                }
            });
        });
        res.json({ message: 'Lecture successfully stored', id: lectureId });
    });
});

    app.get('/pending',async (req, res) => {
        const [lectures] = await db.promise().query('SELECT * FROM lectures WHERE status = "pending"').catch(err => { return []; });
        res.json(lectures);
    });

    app.post('/videoShow',(req,res)=>{
        const {lectureId,videos} = req.body;
        res.json({message: 'Videos successfully stored'});
    });
    
    app.post('/videosAdd', (req, res) => {
        const { lectureId, videos } = req.body;
        videos.forEach(video => {
            const { title, description, url } = video;
            const query = `
                INSERT INTO videos (title, description, url)
                VALUES (?, ?, ?)`;
            db.query(query, [title, description, url], (err, result) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    const query2 = `
                        INSERT INTO video_lecture (lecture_name, video_url)
                        VALUES (?, ?)
                    `;
                    db.query(query2, [lectureId, url], (err2, result2) => {
                        if (err2) {
                            
                            res.status(500).send(err2);
                        }
                    }).catch(err => { return []; });
                }
            });
        }).catch(err => { return []; });
        res.json({ message: 'Videos successfully stored' });
    });

    app.put('/lectures/updateStatus', (req, res) => {
        const { name, status,reviewer } = req.body;

        const query = `
            UPDATE lectures
            SET status = ?, reviewer = ?
            WHERE name = ?
        `;

        db.query(query, [status,reviewer, name], (error, results) => {
            if (error) {
            res.status(500).json({ error: 'Internal Server Error' });
            } else {
            res.status(200).json({ message: 'Lecture status and reviewer updated successfully' });
            }
        }).catch(err => { return []; });
    });

    app.get('/lecture_get/:lectureName', async (req, res) => {
        const { lectureName } = req.params;
        const [lectures] = await db.promise().query('SELECT * FROM lectures WHERE name = ?', [lectureName]).catch(err => { return []; });
        res.json(lectures);
    });

    app.get('/videos/:lectureName', async (req, res) => {
        const { lectureName } = req.params;
        const query = `
            SELECT v.title, v.description, v.url
            FROM videos v
            JOIN video_lecture vl ON v.url = vl.video_url
            WHERE vl.lecture_name = ?
        `;
        const [videos] = await db.promise().query(query, [lectureName]).catch(err => { return []; });
        res.json(videos);
    });

    app.post('/accept', async (req, res) => {
        const { mail,user } = req.body;
        const query = `
            UPDATE lectures
            SET status = 'accepted',  reviewer = ?
            WHERE name = ?
        `;
        db.query(query, [user,mail], (err, result) => {
            if (err) {
                res.status(500).send(err);
            }
        }).catch(err => { return []; });
    });
    app.post('/refuse', async (req, res) => {
        const { mail,user } = req.body;
        const query = `
            UPDATE lectures
            SET status = 'refused',  reviewer = ?
            WHERE name = ?
        `;
        db.query(query, [user,mail], (err, result) => {
            if (err) {
                res.status(500).send(err);
            }
        }).catch(err => { return []; });
    });

    app.get('/lectures_get_categories/:lectureName', async (req, res) => {
    const { lectureName } = req.params;
    const query = `
        SELECT c.name
        FROM categories c
        JOIN categories_lectures lc ON c.name = lc.category_name
        WHERE lc.lecture_name = ?
    `;
    const [categories] = await db.promise().query(query, [lectureName]).catch(err => { return []; });
    res.json(categories);
});
}