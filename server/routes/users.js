var express = require('express');
var router = express.Router();
var cors = require('cors')

const users = [
  {
    username :"test@gmail.com",
    password :"password"
  },
  {
    username :"test2@gmail.com",
    password :"password"
  }
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

module.exports = router;
