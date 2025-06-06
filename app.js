// Simple Express.js application that serves static files from the "public" directory and provides a RESTful API endpoint to get a list of items.
const express = require('express');
const app = express();
const port = 3000;

// body parser json
app.use(express.json());

app.use(express.static('public'));

// router
const postsRouter = require('./routers/posts.js');

// middleware
const notFound = require('./middlewares/notFound.js');
const errorsHandler = require('./middlewares/errorsHandler.js');

// use the posts router
app.use('/posts', postsRouter);

// base route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// errors middleware
app.use(notFound);
app.use(errorsHandler);

// server listens on port 3000
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});