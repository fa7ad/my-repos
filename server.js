const path = require('path');
const Express = require('express');

const app = new Express();

const HOST = process.env.IP || process.env.HOSTNAME || '0.0.0.0';
const PORT = process.env.PORT || 8080;

app.use(Express.static(__dirname));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

/*
app.use('/my-repos/', Express.static(__dirname));
app.get('/my-repos/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
*/

app.listen(PORT, HOST, () => console.log(`Listening on http://${HOST}:${PORT}`));

