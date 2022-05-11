const express = require('express')
const app = express()
const userRouter = require('./routes/UserRoutes')
const cors = require('cors')
app.use(express.json())
app.use(cors())
app.use(userRouter)
app.listen(4000)