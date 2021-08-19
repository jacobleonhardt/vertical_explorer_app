const express = require('express')
const asyncHandler = require('express-async-handler')
const { User, Climb } = require('../../db/models')

const router = express.Router()

router.get('/', asyncHandler( async(req, res) => {
    const { user_id, height, difficulty } = req.body
    const climb = await new Climb(user_id, height, difficulty)
}))

router.post('/', validateSignup, asyncHandler( async(req, res) => {
    const { email, password, username } = req.body
    const user = await User.signup({ email, username, password });

    await setTokenCookie(res, user)

    return res.json({ user })
}))

module.exports = router;
