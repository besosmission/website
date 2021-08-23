var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Images Altfenix', csrfToken: req.csrfToken(), sessionId: req.session.id });
});




module.exports = router;
