var express = require('express');
var router = express.Router();

router.get('/user/list', function(req, res, next) {
  res.json(require('./../model/user/userlist'));
});

router.post('/logout', function(req, res, next) {
  res.json({
    "code": "SUCCESS",
    "msg": null,
    "payload": null,
  });
});

module.exports = function (app) {
  app.use('/api', router);
};
