var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 var frm = '<form action="/" method="POST">' +
 'First name:<br>' + 
 '<input type="text" name="txtFirstname" value="Phonepadith">' +
 '<br>' +
 ' Last name:<br>' +
 '<input type="text" name="txtLastname" value="Phoummavong">' +
 '<br><br>' +
 ' <input type="submit" value="Submit">' +
 '</form>';

 res.send(frm);
  
});

module.exports = router;