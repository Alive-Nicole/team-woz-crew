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