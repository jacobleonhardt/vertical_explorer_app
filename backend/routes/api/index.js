const express = require('express')
const router = express.Router()

router.post('/test', function(req, res) {
    console.log('---HERE---')
    res.json({ requestBody: req.body })
})

module.exports = router
