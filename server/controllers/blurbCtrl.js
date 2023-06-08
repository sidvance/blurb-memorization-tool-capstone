const {Blurb} = require('../models/blurb')

module.exports = {
    addNewBlurb: async (req, res) => {
        const {title, source, quote, userId} = req.body
        const newBlurb = await Blurb.create({title, source, quote, userId})
    }
}