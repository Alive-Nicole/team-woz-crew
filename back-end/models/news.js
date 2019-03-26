const mongoose = require('mongoose');
const bcrypt = require("bcrypt")

const Schema = mongoose.Schema;

const News = new Schema({

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
        collection: 'News'
    }
);

module.exports = mongoose.model('News', News);