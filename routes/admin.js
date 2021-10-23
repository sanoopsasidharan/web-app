const express = require('express');
const router = express.Router();
const helper = require('../helper/user')
var getreqbody;
// admin login page
router.get('/',(req,res)=>{
    res.render('adminLog');
})

router.post('/auth',(req,res)=>{
    helper.adminLogin(req.body).then((rbody)=>{
        getreqbody = rbody;

        if(getreqbody===null){
            res.send('sorry')
        }else{
            res.render('adminHome')
        }
    }) 
})

// admin home page

router.get('/home',(req,res)=>{
    if(!getreqbody){
        res.redirect('/admin')
    }else{
        console.log(getreqbody);
        res.render('adminHome')
    }
})

// show collections

router.get('/edit',(req,res)=>{
    helper.getAllCollecions().then((collections)=>{
        console.log(collections);
        res.render('collection',{admin:true,collections})
    })
})

// add users
router.get('/adduser',(req,res)=>{
    res.render('addUser');
})
router.post('/adda',(req,res)=>{
helper.addUser(req.body)
console.log('working');
res.redirect('/admin/adduser')

})

router.get('/block',(req,res)=>{
    res.render('block')

})
router.get('/blockk',(req,res)=>{
    console.log('woiiiii');
    res.send('jdjdj');
})







module.exports = router;