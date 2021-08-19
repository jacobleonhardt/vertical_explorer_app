const express = require('express')
const router = express.Router()
const usersRouter = require('./users')
const sessionRouter = require('./session')
const climbRouter = require('./climbs')

router.use('/session', sessionRouter)
router.use('/users', usersRouter)
router.use('/climbs', climbRouter)

module.exports = router
