const mongoose = require('mongoose');
const bcrypt = require("bcrypt")

const Schema = mongoose.Schema;

const Articles = new Schema({

    user:{
     type: String
    },
    title:{
     type: String
    },
    
    Author: {
     type: String
    },
    url: {
        type: String
    }
},
    {
        collection: 'Articles'
    }
);

module.exports = mongoose.model('Articles', Articles);