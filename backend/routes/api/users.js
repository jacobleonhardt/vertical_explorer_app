const express = require('express')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')

const { setTokenCookie, requireAuth } = require('../../utils/auth')
const { User } = require('../../db/models')
const { check } = require('express-validator')
const { handleValidationErrors } = require('../../utils/validation')

const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors,
];

const router = express.Router()

router.post('/', validateSignup, asyncHandler( async(req, res) => {
    const { email, password, username, total_climbed } = req.body
    const user = await User.signup({ email, username, password, total_climbed });

    await setTokenCookie(res, user)

    return res.json({ user })
}))

router.put(
  '/',
  asyncHandler( async(req, res, next) => {
    const { id, username, email, password } = req.body

    const user = await User.findByPk(id)
    const hashedPassword = bcrypt.hashSync(password)

    user.update({
      username,
      email,
      hashedPassword
    })

    return res.json(user)
  })
)

router.patch(
  '/',
  asyncHandler( async(req, res, next) => {
    const { id, username, email } = req.body

    const user = await User.findByPk(id)

    user.update({
      username,
      email
    })

    return res.json(user)
  })
  )

module.exports = router;
