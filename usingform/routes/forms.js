var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 var frm = '<form action="/" method="POST">' +
 'Username:<br>' + 
 '<input type="text" name="txtUsername" value="Phonepadith">' +
 '<br>' +
 ' Password:<br>' +
 '<input type="text" name="txtPassword" value="Phoummavong">' +
 '<br><br>' +
 ' <input type="submit" value="Submit">' +
 '</form>';

 res.send(frm);
  
});

module.exports = router;