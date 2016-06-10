var express = require('express'),
    Router = express.Router(),
    Wands = require('../controllers/wands');

Router.get('/',Wands.findAll);
Router.get('/:id',Wands.findOne);
Router.post('/',Wands.create)

module.exports = Router;