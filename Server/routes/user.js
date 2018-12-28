const router = require('express').Router();
const bcrypt    = require('bcrypt')
const jwtUtils = require('../utils/jwt.utils')
const User = require('../db/models/user')
const Company = require('../db/models/company')

router.post('/new',(req,res)=>{
    const passwordHash = bcrypt.hashSync(req.body.password, 10);
    const user = new User({...req.body , password:passwordHash})
    user.save()
    .then(newUser => {
        return res.status(200).json({
            'userId' : newUser.id,
            'token' :jwtUtils.generateTokenForUser(newUser)
        })
    })
      .catch(err => {
        res.status(400).send("unable to save to database");
    });
})

router.post('/sign_in', (req,res)=>{ 
    
    const email = req.body.email
    const password = req.body.password

    if(email == null || password == null || email === '' || password === ''){
        return res.status(400).json({'error':'missing parameters'})
    }
        
    User.findOne({email: email})
    .then((userFound)=>{
        bcrypt.compare(password, userFound.password, (errBycrypt, resBycrypt)=>{
            
            if(resBycrypt){
                return res.status(200).json({
                    'userId' : userFound.id,
                    'token' :jwtUtils.generateTokenForUser(userFound)
                })
            }else{
                return res.status(403).json({'error':"invalid password"})
            }
        })
    })
    .catch(err => {
        res.status(400).send("error");
    })
})

router.get("/me",(req,res)=>{
    // Getting auth header
    var headerAuth  = req.headers['authorization'];
    var userId      = jwtUtils.getUserId(headerAuth);

    if (userId < 0)
        return res.status(400).json({ 'error': 'wrong token' });

    User.findOne({_id:userId})
    .then(user =>{
        console.log(user)
        Company.findOne({ userId: user._id })
        .then(company=>{
            res.send({
                user,
                company
                });
        })
        
    })
    .catch(err=>{
        res.status(500).json({ 'error': 'cannot fetch user' });  
    })
})

module.exports = router;