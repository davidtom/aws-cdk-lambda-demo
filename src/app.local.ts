import app from './app';

// TODO: drive from env/config
const PORT = 3000;

app.listen(PORT, (err) => {
    if (err) {
        return console.error(err);
    }

    return console.log(`server listening on http://localhost:${PORT}`);
});
