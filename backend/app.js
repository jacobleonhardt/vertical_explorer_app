// Set Requirements/Imports
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const csurf = require('csurf')
const helmet = require('helmet')
const cookieParser = require('cookie-parser')
const { ValidationError } = require('sequelize')
const routes = require('./routes')

// Check Current Environment
const { environment } = require('./config')
const { restart } = require('nodemon')
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

// ERROR HANDLING
// Catch unhandled requests and forward to handler.
app.use((_req, _res, next) => {
    const err = new Error("The requested resource couldn't be found.");
    err.title = "Resource Not Found";
    err.errors = ["The requested resource couldn't be found."];
    err.status = 404;
    // invoking next with an arg means other err handlers will be invoked as well
    next(err)
});

// Process sequelize errors
app.use((err, _req, _res, next) => {
    // check if error is a Sequelize error:
    if (err instanceof ValidationError) {
      err.errors = err.errors.map((e) => e.message);
      err.title = 'Validation error';
    }
    next(err);
  });

// Error Formatting
app.use((err, _req, res, _next) => {
    res.status(err.status || 500);
    console.error(err);
    res.json({
      title: err.title || 'Server Error',
      message: err.message,
      errors: err.errors,
      stack: isProduction ? null : err.stack,
    });
  });



module.exports = app
