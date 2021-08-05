const express = require('express')
const router = express.Router()

router.get('/test', function(req, res) {
    res.cookie('XSRF-TOKEN', req.csrfToken())
    res.send('IT\'S WORKING!')
})

module.exports = router;
