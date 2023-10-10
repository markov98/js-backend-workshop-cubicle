const express = require('express');
const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { auth } = require('../middlewares/authMiddleware');

module.exports = (app) => {
    
    app.engine('hbs', handlebars({ extname: 'hbs' }));
    app.set('view engine', 'hbs');
    app.set('views', 'src/views');
    
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.use(cookieParser());

    app.use(express.static('src/public'));

    app.use(auth());
};