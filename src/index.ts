import * as express from 'express';

const app = express();

// TODO: drive from env/config
const PORT = 3000;

app.get('/', function(_, res) {
    res.send('Hello World')
});

app.listen(PORT, (err) => {
    if (err) {
        return console.error(err);
    }

    return console.log(`server listening on port ${PORT}`);
});

export default app;