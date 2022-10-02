const Router = require('express')
const router = new Router()
const BrandCountryController = require('../controlers/brandCountryController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), BrandCountryController.create)
router.get('/', BrandCountryController.getAll)

module.exports = router