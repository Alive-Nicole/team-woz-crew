const mongoose = require('mongoose');
const bcrypt = require("bcrypt")

const Schema = mongoose.Schema;

const Events = new Schema({

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
        collection: 'Events'
    }
);

module.exports = mongoose.model('Events', Events);