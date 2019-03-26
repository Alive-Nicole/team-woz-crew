const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const share = require('../../models')

router.post('/add', (request, response) => {
	const { username: user } = request.user
	
	if( user ) {
		const { type, payload } = request.body
		const { job, article, event} = share
		
		if( type === "article" ){
			const { title, author, url } = payload

			article.create({ user, title, author, url }, (err, newArticle) => {
				if(err) console.log('====err====', err)
				return response.json({ message: "Success from article route" })
			})
		}
		if( type === "event" ){
			const { name, localized_location, link } = payload

			event.create({ user, name, localized_location, link }, (err, newEvent) => {
				if(err) console.log('====err====', err)
				return response.json({ message: "Success from event route" })
			})
		}
		if( type === "job" ){
			const { title, location, url } = payload

			job.create({ user, title, location, url }, (err, newJob) => {
				if(err) console.log('====err====', err)
				return response.json({ message: "Success from job route" })
			})
		}
	}
})
=======
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
>>>>>>>  news, jobs, and events models


module.exports = router;