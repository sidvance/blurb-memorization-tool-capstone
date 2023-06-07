require('dotenv').config()
const express = require('express')
const cors = require('cors')
const {SERVER_PORT} = process.env

//db imports
const {sequelize} = require('./util/database')
const {User} = require('./models/user')
const {Blurb} = require('./models/blurb')

//db relationships
User.hasMany(Blurb)
Blurb.belongsTo(User)

//controller imports
const {register} = require('./controllers/authCtrl')
const {login} = require('./controllers/authCtrl')

const app = express()

//middleware vvv these are run every time a request comes in
//line below used to translate json into js
app.use(express.json())
app.use(cors())

//endpoint for authentification
app.post('/api/register', register)
app.post('/api/login', login)

//below line establishes connection with database
sequelize.sync()
    .then(() => app.listen(4006, console.log(`we're in business boys: port ${SERVER_PORT}`)))
    .catch(theseHands => console.log(theseHands))