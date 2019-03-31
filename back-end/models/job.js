const mongoose = require('mongoose');
const bcrypt = require("bcrypt")

const Schema = mongoose.Schema;

const Job = new Schema({

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
        collection: 'Job'
    }
);

module.exports = mongoose.model('Job', Job);