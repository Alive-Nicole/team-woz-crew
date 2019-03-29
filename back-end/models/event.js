const mongoose = require('mongoose');
const bcrypt = require("bcrypt")

const Schema = mongoose.Schema;

const Event = new Schema({

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
        collection: 'Event'
    }
);

module.exports = mongoose.model('Event', Event);