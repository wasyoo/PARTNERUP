const express = require('express')
const bodyParser  = require('body-parser');
const dbConnect = require('./db/dbConnect')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const userRouter = require('./routes/user')
const companyRouter = require('./routes/company')
const needsRouter = require('./routes/needs')
const partnerShip = require('./routes/partnerShip')

const app = express()

//allow cors-origin request 
app.use(cors())

// Body Parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(fileUpload())

app.use('/', express.static(__dirname + '/uplaodedFiles'))

dbConnect()

app.use('/user', userRouter);
app.use('/company', companyRouter);
app.use('/needs', needsRouter);
app.use('/partenrship', partnerShip);

app.listen(4000,()=>{
    console.log("server is running on port 4000")
})