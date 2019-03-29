const mongoose = require('mongoose');
const bcrypt = require("bcrypt")

const Schema = mongoose.Schema;

const Events = new Schema({

    user:{
     type: String
    },
    name:{
     type: String
    },
    
    localized_location: {
     type: String
    },
    link: {
        type: String
    }
},
    {
        collection: 'Events'
    }
);

module.exports = mongoose.model('Events', Events);