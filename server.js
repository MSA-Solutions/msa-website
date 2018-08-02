var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    contactUS = require('./api/models/contact-us.Model'),
    path = require('path'),
    bodyParser = require('body-parser');

//mongoose.Promise= global.Promise;
//mongoose.connect('mongodb://localhost/Msadb')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Credentials', true);
    next();

})
app.use(express.static('public'));

console.log('>>>',__dirname);

const staticAssetsPath = path.resolve(__dirname, '');
app.use(express.static(staticAssetsPath));

app.get('/',(req, res) => res.sendFile(path.join(__dirname, 'index.html')));

var router = require('./api/routes/contact-us.Routes');
router(app)

app.listen(port)

console.log('MSA server started on port ' + port)