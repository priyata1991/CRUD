require('./models/db');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const Handlebars = require('handlebars')

const employeeController = require('./controllers/employeeController');

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/',handlebars: allowInsecurePrototypeAccess(Handlebars) }));
app.set('view engine', 'hbs');

app.listen(8080, () => {
    console.log('Express server started at port : 8080');
});

app.use('/employee', employeeController);
