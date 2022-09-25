const Router = require('express')
const router = new Router()
const subtypeController = require('../controlers/subtypeController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',  subtypeController.create)
router.get('/', subtypeController.getAll)

module.exports = router