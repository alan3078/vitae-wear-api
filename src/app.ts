import express from 'express'
import * as http from 'http'

import * as winston from 'winston'
import * as expressWinston from 'express-winston'
import cors from 'cors'
import debug from 'debug'
import path from 'path'
import mainRouter from './routes/main-router'

const app: express.Application = express()
const server: http.Server = http.createServer(app)
const port = process.env.PORT || 3000
const debugLog: debug.IDebugger = debug('app')

// here we are adding middleware to parse all incoming requests as JSON
app.use(express.json())

// here we are adding middleware to allow cross-origin requests
app.use(cors())
// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// here we are preparing the expressWinston logging middleware configuration,
// which will automatically log all HTTP requests handled by Express.js
const loggerOptions: expressWinston.LoggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({ all: true })
    )
}

if (!process.env.DEBUG) {
    loggerOptions.meta = false // when not debugging, log requests as one-liners
}

// initialize the logger with the above configuration
app.use(expressWinston.logger(loggerOptions))

app.use(mainRouter)

// this is a simple route to make sure everything is working properly
const runningMessage = `Server running at http://localhost:${port}`
app.get('/', (req: express.Request, res: express.Response) => {
    res.render('index', { title: 'Vitae Wear API' })
})

server.listen(port, () => {
    // our only exception to avoiding console.log(), because we
    // always want to know when the server is done starting up
    console.log(runningMessage)
})