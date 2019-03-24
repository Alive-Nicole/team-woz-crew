
const express = require('express');
const router = express.Router();
let Share = require('../../models/share');

router.post('/add', (request, response) => {
    const { user, title, location, url } = request.body
   // Share.findAll( (err, share) => {
      if(err) response.json(err);
      else {
       share.user = user.username;
       share.tite = title;
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