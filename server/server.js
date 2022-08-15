const express = require('express');
const app = express();
const posts = require('./routePost');

app.use('/posts', posts)

const port = 8080;
app.listen(port)