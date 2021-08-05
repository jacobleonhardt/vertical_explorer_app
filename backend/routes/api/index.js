const express = require('express')
const router = express.Router()
const usersRouter = require('./users')
const sessionRouter = require('./session')

router.post('/test', function(req, res) {
    res.json({ requestBody: req.body })
})

router.use('/session', sessionRouter)
router.use('/users', usersRouter)

module.exports = router
