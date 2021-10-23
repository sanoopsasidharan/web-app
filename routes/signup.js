var express = require('express');
var router = express.Router();
var helper = require('../helper/user')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('userLogin');
});

router.post('/auth',(req,res)=>{
   
  //tansfer the data in signup 
  helper.signup(req.body).then((err)=>{

    if(err){
      res.send('allready login')

    }else{
      res.render('home')
    }
 
  })  

})

module.exports = router;
