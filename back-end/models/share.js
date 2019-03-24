const mongoose = require('mongoose');
const bcrypt = require("bcrypt")

const Schema = mongoose.Schema;

const Share = new Schema({

    user:{
     type: String
    },
    title:{
     type: String
    },
    
    location: {
     type: String
    },
    url: {
        type: String
    }
},
    {
        collection: 'Share'
    }
);

module.exports = mongoose.model('Share', Share);