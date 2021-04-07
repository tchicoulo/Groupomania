const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors =  require('cors');
const session = require('express-session');
const postRoutes = require('./routes/post');
const userRoutes = require('./routes/user');
const commentRoutes = require('./routes/commentaire');

const app = express();

//Securité, parser
app.use(helmet())
app.use(cors());
app.use(bodyParser.json());
app.use(session({
  secret: process.env.SECRET_SESSION,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

//Routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api', commentRoutes);


module.exports = app;
