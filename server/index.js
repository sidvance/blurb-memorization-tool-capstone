require('dotenv').config()
const express = require('express')
const cors = require('cors')
const {SERVER_PORT} = process.env
const {sequelize} = require('./util/database')
const {User} = require('./models/user')
const {Blurb} = require('./models/blurb')

User.hasMany(Blurb)
Blurb.belongsTo(User)

const app = express()

//middleware vvv these are run every time a request comes in
//line below used to translate json into js
app.use(express.json())
app.use(cors())

//below line establishes connection with database
sequelize.sync()
    .then(() => app.listen(4006, console.log(`we're in business boys: port ${SERVER_PORT}`)))
    .catch(theseHands => console.log(theseHands))