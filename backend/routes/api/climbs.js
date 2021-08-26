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

router.post('/', asyncHandler( async(req, res) => {
    const { user_id, height, difficulty } = req.body
    const myClimb = await Climb.add(user_id, height, difficulty)

    return myClimb
}))

module.exports = router;
