const mongoose = require('mongoose');
const bcrypt = require("bcrypt")

const Schema = mongoose.Schema;

const Article = new Schema({

    user:{
     type: String
    },
    title:{
     type: String
    },
    
    author: {
     type: String
    },
    url: {
        type: String
    }
},
    {
        collection: 'Article'
    }
);

module.exports = mongoose.model('Article', Article);