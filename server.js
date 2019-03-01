const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const session = require("express-session")
const MongoStore  = require('connect-mongo')(session)
const passport = require("passport")
const helmet = require("helmet")
const cors = require("cors")
const morgan = require("morgan")
const cookieParser = require("cookie-parser")

const routes = require("./back-end/routes")

const app = express()
const PORT = process.env.PORT || 3001

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// enhance your app security with Helmet
app.use(helmet())

// enable all CORS requests
// app.use(cors())
// log HTTP requests
app.use(morgan('combined'))

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("front-end/build"))
}
app.use(cookieParser("s3cr3t"));
//express-sessions creates a server session for the user when they login
app.use(session({
  secret: "s3cr3t",
  resave: true,
  saveInitialized: true,
  saveUninitialized: true,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  cookie: { secure: false, maxAge: 600000 }
}))

//allows passport auth to talk with the express server
app.use(passport.initialize())
app.use(passport.session())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Add routes, both API and view
app.use("/",routes)

// Connect to the Mongo DB
let connectionType = ""
if(process.env.NODE_ENV === "production"){
  connectionType = process.env.MONGODB_URI
}else {
  connectionType = "mongodb://localhost:27017/devCompanion"
}
mongoose.connect(connectionType, { useNewUrlParser: true })
  .catch(err => console.log(err))

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
})