var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/form', function(req, res, next) {
  res.redirect('./views/form.html')
});

module.exports = router;