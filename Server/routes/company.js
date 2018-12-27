const router = require('express').Router();
const jwtUtils = require('../utils/jwt.utils')
const Company = require('../db/models/company')
const Needs = require('../db/models/needs')
const PartnerShip = require ('../db/models/partnerShip')


router.get("/:id",(req,res)=>{
    Company.findOne({_id : req.params.id})
    .then((company)=> {
        if (company) {
            Needs.find({userId : company.userId})
            .then(needs=>{
                PartnerShip.find({$or :[{userId : company.userId},{userId : company.userId}]})
                .then(partner=>{
                    res.status(201).json({
                        company,
                        needs,
                        partner
                    }); 
                })
                .catch(err=>console.log(err))
            }).catch(err=>console.log(err))
             
        } else {
            res.status(404).json({ 'error': 'company not found' });
        }
    }).catch((err)=> {
        res.status(500).json({ 'error': 'cannot fetch company' });
    });
})

router.post("/add",(req, res, next)=>{
    
    //Verif Token
    var headerAuth  = req.headers['authorization'];
    var userId      = jwtUtils.getUserId(headerAuth);

    if (userId < 0)
        return res.status(400).json({ 'error': 'wrong token' });

    //Upload File
    let uploadFile = req.files.file
    const fileName = req.files.file.name

    uploadFile.mv(
        `${__dirname}/../uplaodedFiles/${fileName}`,
        function (err) {
          if (err) {
            return res.status(500).send(err)
          }
    
          res.json({
            file: req.files.file.name,
          })
        },
      )

    //Send new Company to database
    const company = new Company({...req.body, userId:userId})

    company.save()
    .then(item => {
        res.send(company);
    })
      .catch(err => {
        res.status(400).send("unable to save to database");
    });
})

router.post("/needs/add",(req,res)=>{
    
    //Verif Token
    var headerAuth  = req.headers['authorization']; 
    var userId      = jwtUtils.getUserId(headerAuth);

    if (userId < 0)
        return res.status(400).json({ 'error': 'wrong token' });

    //instantiate new Needs
    const needs = new Needs({
        ...req.body , 
        userId: userId , 
        date: Date.now()
    })
    console.log(needs)

    //save data
    needs.save()
    .then(needs=>res.send(needs))
    .catch(err=>console.log(err))

})

router.get("/:id/needs",(req,res)=>{

    //get id params
    const id_company = req.params.id

    Company.findOne({ _id : id_company})
    .then(companyFound=>{
        
        Needs.find({userId : companyFound.userId})
        .then(companyNeeds=>{
            res.send({
                needs : companyNeeds,
                company : companyFound
            })
        })
        .catch(err=>console.log(err))
    })
    
})

router.get("/:id/partnership",(req,res)=>{

    //Verif Token
    var headerAuth  = req.headers['authorization'];
    var userId      = jwtUtils.getUserId(headerAuth);

    if (userId < 0)
        return res.status(400).json({ 'error': 'wrong token' });
    

    PartnerShip.find( {$or :[{userId : userId},{userId : userId}]} )
    .then(companyNeeds=>{
        res.send(companyNeeds)
    })
    .catch(err=>console.log(err))

})

module.exports = router;