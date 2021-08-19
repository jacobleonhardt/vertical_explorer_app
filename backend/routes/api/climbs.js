const express = require('express')
const asyncHandler = require('express-async-handler')
const { restoreUser } = require('../../utils/auth');
const { User, Climb } = require('../../db/models')

const router = express.Router()

router.get('/', asyncHandler( async(req, res) => {
    console.log('+++++++++++ HERE ++++++++++')

    const id = req.user.id
    console.log('###########', id)
    const myClimb = await Climb.findAll({
        where: { user_id: id },
        order: [
            ['createdAt', 'DESC'],
        ]
    })

    return res.json(myClimb)
}))


module.exports = router;
