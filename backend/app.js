const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors =  require('cors');

const postRoutes = require('./routes/post');
const userRoutes = require('./routes/user');
const commentRoutes = require('./routes/commentaire');

const app = express();

//Security, parser
app.use(helmet())
app.use(cors());
app.use(bodyParser.json());

//Routes
app.use('/api/auth', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/commentaires', commentRoutes);


module.exports = app;
