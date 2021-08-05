const express = require('express')
const router = express.Router()
const apiRouter = require('./api')

// use apiRouter whenever there is a path with '/api'
router.use('/api', apiRouter)


module.exports = router;
