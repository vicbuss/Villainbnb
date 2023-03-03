const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0/villainbnb');

app.listen(3000, () => console.log('Server Started'));