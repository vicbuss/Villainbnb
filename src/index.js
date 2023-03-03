require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

//Passar URL da Base de Dados em 'mongoose.connect(_)'
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());

const villainbnbRouter = require('../routes/villainbnb');
app.use('/villainbnb', villainbnbRouter);

app.listen(3000, () => console.log('Server Started'));