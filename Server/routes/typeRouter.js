const Router = require('express')
const router = new Router()
const typeController = require('../controlers/typeController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',  typeController.create)
router.get('/', typeController.getAll)

module.exports = router