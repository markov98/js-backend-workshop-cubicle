const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

module.exports = (app) => {
    
    app.engine('hbs', handlebars({ extname: 'hbs' }));
    app.set('view engine', 'hbs');
    app.set('views', 'src/views');
    
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.use(express.static('public'));

};