const {Blurb} = require('../models/blurb')
const {User} = require('../models/user')

module.exports = {

    addNewBlurb: async (req, res) => {

       try { 
        const {title, source, quote, userId} = req.body

        const newBlurb = await Blurb.create({
            title, 
            source, 
            quote, 
            userId
            })

            res.sendStatus(200)
        } catch(theseHands){
            console.log(theseHands)
            res.status(500).send('Blurb was not added successfully.')
        }
    },
    getUserBlurbs: async (req, res) => {
       try {
            const {userId} = req.params

            const blurbs = await Blurb.findAll({
                include: [{
                    model: User,
                    attributes: ['username', 'id'],
                    where: {id: userId}
                }]
            })

            res.status(200).send(blurbs)
        } catch(theseHands){
            console.log(theseHands)
            res.sendStatus(500)
        }
    },
    getBlurb: async (req, res) => {
        try{
            const {blurbId} = req.params

            const blurb = await Blurb.findOne({
                where: {id: blurbId},
                include: [{
                    model: User,
                    attributes: ['username', 'id'],
                }]
            })

            res.status(200).send(blurb)
        } catch(theseHands){
            console.log(theseHands)
            res.status(400).send('No blurb found.')
        }
    }
}