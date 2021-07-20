import express from 'express'
import * as http from 'http'
import cors from 'cors'
import path from 'path'
import mainRouter from './routes/main-router'
import errorHandler from './users/middleware/error-handler'

const app: express.Application = express()
const server: http.Server = http.createServer(app)
const port = process.env.PORT || 3000

// here we are adding middleware to parse all incoming requests as JSON
app.use(express.json())

// here we are adding middleware to allow cross-origin requests
app.use(cors())
// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(mainRouter)
app.use(errorHandler)

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
