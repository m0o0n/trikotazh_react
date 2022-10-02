const { BrandCountry } = require("../models/models")

class BrandCountryController {
    async create(req, res){
        const {name} = req.body
        const brands = await BrandCountry.create({name})
        return res.json(brands)
    }

    async getAll(req, res){
        const brands = await BrandCountry.findAll()
        return res.json(brands)
    }
}

module.exports = new BrandCountryController()