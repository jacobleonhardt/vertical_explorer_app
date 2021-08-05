// Set Requirements
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const csurf = require('csurf')
const helmet = require('helmet')
const cookieParser = require('cookie-parser')

// Set Imports
const routes = require('./routes')

// Check Current Environment
const { environment } = require('./config')
const isProduction = environment === 'production'

// Initialize App
const app = express()

app.use(morgan('dev'))
app.use(cookieParser())
app.use(express.json())

// Security Middleware
if (!isProduction) {
    app.use(cors());
}

app.use(helmet({
    contentSecurityPolicy: false
}))

app.use(csurf({
    cookie: {
        secure: isProduction,
        sameSite: isProduction && "Lax",
        httpOnly: true,
    }
}))

app.use(routes)

module.exports = app
