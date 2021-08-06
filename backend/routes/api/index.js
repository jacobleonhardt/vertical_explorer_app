const express = require('express')
const router = express.Router()
const usersRouter = require('./users')
const sessionRouter = require('./session')

router.use('/session', sessionRouter)
router.use('/users', usersRouter)

module.exports = router
