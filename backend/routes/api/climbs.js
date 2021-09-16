const express = require('express')
const asyncHandler = require('express-async-handler')
const { restoreUser } = require('../../utils/auth');
const { User, Climb } = require('../../db/models')

const router = express.Router()

router.get('/', restoreUser, asyncHandler( async(req, res) => {

    const id = req.user.id
    const myClimb = await Climb.findAll({
        where: { user_id: id },
        order: [
            ['createdAt', 'DESC'],
        ]
    })

    return res.json(myClimb)
}))

router.post('/', restoreUser, asyncHandler( async(req, res) => {

    const { user_id, height, difficulty } = req.body
    await Climb.add(user_id, height, difficulty)
    const climbHeight = Number(height)
    await User.updateUserTotal(climbHeight)

    const myClimb = await Climb.findAll({
        where: { user_id: user_id },
        order: [
            ['createdAt', 'DESC'],
        ]
    })
    return res.json(myClimb)
}))

module.exports = router;
