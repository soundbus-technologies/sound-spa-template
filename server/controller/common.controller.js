/**
 * Created by appian on 2017/6/7.
 */
var express = require('express');
var router = express.Router();

router.post('/login', function(req, res, next) {
	res.json({
		"code": "SUCCESS",
		"msg": null,
		"payload": null,
	});
	/*res.sendStatus(403);
	res.json({
		"status":403,
		"errCode":"E10003",
		"errMsg":"An Authentication object was not found in the SecurityContext",
		"devMsg":"An Authentication object was not found in the SecurityContext",
		"moreInfoUrl":"mailto:developer@soundbus.cn"});*/
});

router.post('/logout', function(req, res, next) {
	res.json({
		"code": "SUCCESS",
		"msg": null,
		"payload": null,
	});
});

module.exports = function (app) {
	app.use('/manage', router);
};