const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const session = require("express-session")
const passport = require("passport")
const helmet = require("helmet")
const cors = require("cors")
const morgan = require("morgan")

const routes = require("./back-end/routes")

const app = express()
const PORT = process.env.PORT || 3001

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
 // enhance your app security with Helmet
 app.use(helmet())

 // enable all CORS requests
 app.use(cors())

 // log HTTP requests
app.use(morgan('combined'))

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("front-end/build"))
}
app.use(session({
  secret: 's3cr3t',
  resave: true,
  saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())

// Add routes, both API and view
app.use("/",routes)

// Connect to the Mongo DB
<<<<<<< HEAD
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/devCompanion")
=======
let connectionType = ""
if(process.env.NODE_ENV === "production"){
  connectionType = process.env.MONGODB_URI
}else {
  connectionType = "mongodb://localhost:27017/devCompanion"
}
mongoose.connect(connectionType, { useNewUrlParser: true })
  .catch(err => console.log(err))
>>>>>>> current ui-auth placeholder

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
})
