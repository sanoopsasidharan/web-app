var express = require('express');
var router = express.Router();
var helper = require('../helper/user')

router.get('/',(req,res)=>{
  res.render('login')
})

router.post('/login',(req,res)=>{


  helper.Login(req.body).then((rbody)=>{
    if(rbody===null){
      res.redirect('/');
    }else{
      res.redirect('/home')
    }

  })
})

module.exports = router;
