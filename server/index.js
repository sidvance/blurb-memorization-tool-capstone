require('dotenv').config()
const express = require('express')
const session = require('express-session')
const cors = require('cors')
const {SERVER_PORT, SECRET} = process.env

//db imports
const {sequelize} = require('./util/database')
const {User} = require('./models/user')
const {Blurb} = require('./models/blurb')

//db relationships
User.hasMany(Blurb)
Blurb.belongsTo(User)

//controller imports
const {register, login, checkUser, logout} = require('./controllers/authCtrl')
const {addNewBlurb, getUserBlurbs, getBlurb} = require('./controllers/blurbCtrl')

const app = express()

//middleware vvv these are run every time a request comes in
//line below used to translate json into js
app.use(express.json())
app.use(cors())
app.use(session({
    secret: SECRET,
    RESAVE: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 2
    }
}))

//endpoints for authentification
app.post('/api/register', register)
app.post('/api/login', login)
app.get('/api/user', checkUser)
app.post('/api/logout', logout)

//endpoints for data
app.post('/api/blurbs', addNewBlurb)
app.get('/api/blurbs/:userId', getUserBlurbs)
app.get('/api/blurb/:blurbId', getBlurb)

//below line establishes connection with database
// sequelize.sync({force: true})
sequelize.sync()
    .then(() => app.listen(4006, console.log(`we're in business boys: port ${SERVER_PORT}`)))
    .catch(theseHands => console.log(theseHands))