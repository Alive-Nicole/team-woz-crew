
const express = require('express');
const router = express.Router();
let share = require(['../../models/job'],['../../models/news'],['../../models/events'])

router.post('/add', (request, response) => {
    const { user, title, location, url, Author } = request.body
   // Share.findAll( (err, share) => {
      if(err) response.json(err);
      else {
       share.user = user.username;
       share.tite = title;
       share.Author = Author;
       share.location = location;
       share.url = url;
  
        share.save().then(share => {
          response.json(share);
        })
        console.log(share)
        .catch(err => {
            res.status(400).send("unable to update the database");
        });
    }
    })


module.exports = router;