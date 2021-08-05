const express = require('express')
const router = express.Router()
const apiRouter = require('./api')

// use apiRouter whenever there is a path with '/api'
router.use('/api', apiRouter)

router.get('/home', function(req, res) {
    res.cookie('XSRF-TOKEN', req.csrfToken())
    res.send('IT\'S WORKING!')
})


module.exports = router;
