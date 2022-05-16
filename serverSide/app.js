const express = require('express')
const app = express()
const userRouter = require('./routes/UserRoutes')
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(express.json())


app.use(cors({origin: 'http://localhost:3000', credentials: true}));
app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
      next();
    });


app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(userRouter)
app.get('/user/:id', function (req, res, next) {
    res.json({user: 'CORS enabled'})
  })

app.listen(4000, function () {
    console.log('CORS-enabled web server listening on port 4000')
  })