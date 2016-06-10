var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    config = require('./config'),
    routes = require('./router');

mongoose.connect(config.db.mongooseURI);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})); 

app.use('/api/',routes);
app.use('/libs',express.static('bower_components'));
app.use('/',express.static('client'));


app.listen(3000,function(){
    console.log('code started on port 3000...');
});