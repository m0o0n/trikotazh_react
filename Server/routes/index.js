const Router = require('express')
const router = new Router()
const typeRouter = require('./typeRouter')
const subtypeRouter = require('./subtypeRouter')
const brandCountryRouter = require('./brandCountryRouter')
const userRouter = require('./userRouter')
const productRouter = require('./productRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/subtype', subtypeRouter)
router.use('/brandCountry', brandCountryRouter)
router.use('/product', productRouter)

module.exports = router