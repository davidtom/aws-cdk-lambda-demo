import * as express from 'express';

const app = express();

app.get('/', function(req, res) {
    console.log(req.url);
    res.json('Hello World')
});

export default app;
