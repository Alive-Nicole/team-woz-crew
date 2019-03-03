const mongoose = require('mongoose');
const bcrypt = require("bcrypt")

const Schema = mongoose.Schema;

// Define collection and schema for user
const User = new Schema({
  picture: {
    type:['.jpg', '.gif', '.png', '.gif']
  },
  username: {
    type: String
  },
  password:{
    type: String
  },
  firstName: {
    type: String
  },
  lastName: {
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

// User.methods.generateHash = function(password) {
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

// // checking if password is valid
// User.methods.validPassword = function(password) {
//   return bcrypt.compareSync(password, this.local.password);
// };

module.exports = mongoose.model('User', User);