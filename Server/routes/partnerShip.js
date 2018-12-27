const router = require('express').Router();
const jwtUtils = require('../utils/jwt.utils')
// const Company = require('../db/models/company')
// const Needs = require('../db/models/needs')
const PartnerShip = require ('../db/models/partnerShip')
const User = require ('../db/models/user')
const Company = require ('../db/models/company')

router.post("/add",(req, res)=>{
    
    //Verif Token
    var headerAuth  = req.headers['authorization'];
    var userId      = jwtUtils.getUserId(headerAuth);

    if (userId < 0)
        return res.status(400).json({ 'error': 'wrong token' });

    //Create new PartnerShip 
    const partnerShip = new PartnerShip({
        ...req.body, 
        sender  : userId,
    })

    partnerShip.save()
    .then(partnership => {
        res.send(partnership);
    })
      .catch(err => {
        res.status(400).send("unable to save to database");
    });
})

router.get("/:id",(req,res)=>{
    
    PartnerShip.findOne({_id:req.params.id})
    .then(partnership=>{
        Company.findOne({userId : partnership.recipient})
        .then(company=>{
            res.send({
                partnership,
                company
            })
        })
    })
    .catch(err=>console.error(err))
})

router.put("/:id",(req,res)=>{
    console.log(req.body)
    console.log(req.params.id)
    PartnerShip.findOneAndUpdate(req.params.id,{ $set: req.body},{new:true})
    .then((partner)=>{
        console.log(partner)
        res.send({'message':'PartnerShip updated'})
    })
    .catch(err=>console.error(err))
})


module.exports = router;