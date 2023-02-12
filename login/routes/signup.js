var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('Sign up', { title: 'Express', session : req.session  });
});

res.send('Sign up', { message: `Thank you for signing up, ${username}!` });

router.post('/Sign up', function(request, response, next){
});

router.get('/Sign up', function(request, response, next){

  request.session.destroy();

  response.redirect("/login");

});

module.exports = router;
