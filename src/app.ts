import * as express from 'express';

const app = express();

app.get('/', function(req, res) {
    console.log(req.url);
    res.json('Hello World')
});

app.get('/mirror', function(req, res) {
    console.log(req.url);
    res.json(req.query)
})

export default app;
