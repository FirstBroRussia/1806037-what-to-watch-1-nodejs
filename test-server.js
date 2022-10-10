import { response } from 'express';
import http from 'http';

const port = 8000;

const onClientConnect = (req, res) => {
    const ua = req.headers['user-agent'];
    res.end(`Hello ${ua}`);
    
};

const httpServer = http.createServer(onClientConnect);

httpServer.listen(port, () => {
    console.info(`Принимаю подключение на ${port}`);
});

httpServer.on(`error`, (err) => {
    console.error(`Ошибка ${err.message}`);
});
