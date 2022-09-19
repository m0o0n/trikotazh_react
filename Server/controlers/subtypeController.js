const {SubType} = require('../models/models')
const ApiError = require('../error/ApiError')
class SubTypeController {
    async create(req, res){
        const {name} = req.body
        const type = await SubType.create({name})
        return res.json(type)
    }

    async getAll(req, res){
        const types = await SubType.findAll()
        return res.json(types)
    }
}

module.exports = new SubTypeController()