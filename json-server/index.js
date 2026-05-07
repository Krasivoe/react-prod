const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Имитация задержки при запросах
server.use(async (req, res, next) => {
    await new Promise((resolve) => {
        setTimeout(resolve, 500);
    });

    next();
});

server.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({ message: 'AUTH ERROR' });
    }

    return next();
});

// Логин
server.post('/login', (req, res) => {
    try {
        const { username, password } = req.body;

        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
        const { users } = db;

        const userFromDb = users.find((user) => user.username === username && user.password === password);

        return userFromDb ? res.json(userFromDb) : res.status(403).json({ message: 'AUTH ERROR' });
    } catch (e) {
        console.log(e);

        return res.status(500).json({ message: e.message });
    }
});

server.use(router);

server.listen(8000, () => {
    console.log('server is running on 8000 port');
});
