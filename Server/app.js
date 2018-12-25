const express = require('express')
const bodyParser  = require('body-parser');
const dbConnect = require('./db/dbConnect')
const cors = require('cors')
var bcrypt    = require('bcrypt');
const User = require('./db/models/user')

const app = express()

//allow cors-origin request 
app.use(cors())

// Body Parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

dbConnect()

app.post('/new_user',(req,res)=>{
    const passwordHash = bcrypt.hashSync(req.body.password, 10);
    const user = new User({...req.body , password:passwordHash})
    console.log(user)
    user.save()
    .then(item => {
        res.send(user);
    })
      .catch(err => {
        res.status(400).send("unable to save to database");
    });
})



app.listen(4000,()=>{
    console.log("server is running on port 4000")
})