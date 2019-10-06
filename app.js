const express = require('express');

const mainRoute = require('./routes/index')

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'pug');

app.use('/static', express.static('public'));

app.use('/', mainRoute);

app.listen(port, () => {
    console.log(`Currently listening on port ${port}...`)
});