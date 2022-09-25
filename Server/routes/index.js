const Router = require('express')
const router = new Router()
const typeRouter = require('./typeRouter')
const subtypeRouter = require('./subtypeRouter')
const brandRouter = require('./brandRouter')
const userRouter = require('./userRouter')
const productRouter = require('./productRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/subtype', subtypeRouter)
router.use('/brand', brandRouter)
router.use('/product', productRouter)

module.exports = router