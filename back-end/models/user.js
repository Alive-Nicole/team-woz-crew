<<<<<<< HEAD
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for user
const User = new Schema({
  userName: {
    type: String
  },
  firstName: {
    type: String
  },
   phone: {
    type: Number
  },
   email: {
    type: String
  },
   gitHub: {
    type: String
  },
    aboutYou: {
    type: String
  },
   linkedIn: {
    type: String
  },
   languages: {
    type: [String]
  },
   technologies: {
    type: [String]
  },
   interests: {
    type: [String]
  }
},

{
    collection: 'User'
});

module.exports = mongoose.model('User', User);
=======
const mongoose = require("mongoose")
const bCrypt = require("bcrypt-nodejs")

const userSchema = mongoose.Schema(
  {
    id: String,
    token: String,
    email: String,
    password: String
  }
)

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
>>>>>>> current ui-auth placeholder
