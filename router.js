var express = require('express'),
    Router = express.Router(),
    WandsRouter = require('./routers/wands');

Router.use('/wands/',WandsRouter);

module.exports = Router