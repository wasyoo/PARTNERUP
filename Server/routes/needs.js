const router = require('express').Router();
const jwtUtils = require('../utils/jwt.utils')
const Needs = require('../db/models/needs')
const Company = require('../db/models/company')

router.post('/add',(req,res)=>{
    // Getting auth header
    var headerAuth  = req.headers['authorization'];
    var userId      = jwtUtils.getUserId(headerAuth);

    if (userId < 0)
        return res.status(400).json({ 'error': 'wrong token' });


    const needs = new Needs({
        ...req.body, 
        userId : userId, 
        date : new Date()})
    
    needs.save()
    .then(item => {
        res.send(needs);
    })
      .catch(err => {
        res.status(400).send("unable to save to database");
    });
})

router.get('/all',(req,res)=>{
    Needs.find({})
    .then(needs=>{
        Company.find({})
        .then(company=>{
            res.send({
                needs,
                company
            })
        })
    })
    .catch(err=>console.log(err))
})

router.get("/:UserId/company",(req,res)=>{
    Company.findOne({userId : req.params.UserId})
    .then(company=>{
        res.send(company)
    })
    .catch(err=>console.log(err))
})

router.get("/:id",(req,res)=>{
    console.log(req.params.id)
    Needs.findOne({_id : req.params.id})
    .then(need =>{
        Company.findOne({userId : need.userId})
        .then(company=>{
            res.send({
                need,
                company
            })
        })
        .catch(err=>console.log(err))
    })
    .catch(err=>console.log(err))
})

module.exports = router;