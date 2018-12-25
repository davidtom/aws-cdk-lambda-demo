import * as express from 'express';

const app = express();

app.get('/', function(req, res) {
    console.log(req.url);
    res.send('Hello World')
});

export default app;
