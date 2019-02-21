const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// define the Express app
const app = express();

// the database
const users = [];

// enhance your app security with Helmet
app.use(helmet());

// use bodyParser to parse application/json content-type
app.use(bodyParser.json());

// enable all CORS requests
app.use(cors());

// log HTTP requests
app.use(morgan('combined'));

// retrieve all users
app.get('/', (req, res) => {
  const us = users.map(u => ({
    id: u.id,
    username: u.username,
    firstName: u.firstName,
    lastName: u.lastName,
    phone: u.phone,
    email: u.email,
    gitHub: u.gitHub,
    linkedIn: u.linkedIn,
    aboutYou: u.aboutYou,
    languages: u.languages.length,
    technologies: u.technologies.length,
    interests: u.interests.length

  }));
  res.send(us);
});

// get a specific user
app.get('/:id', (req, res) => {
  const user = users.filter(u => (u.id === parseInt(req.params.id)));
  if (user.length > 1) return res.status(500).send();
  if (user.length === 0) return res.status(404).send();
  res.send(user[0]);
});

// insert a new user
app.post('/', (req, res) => {
  const {username, firstName, lastName, phone, email, linkedIn, gitHub, aboutYou, languages:[],technologies:[],interests:[]} = req.body;
  const newUser = {
    id: users.length + 1,
    username,
    firstName,
    lastName,
    phone,
    email,
    linkedIn,
    gitHub,
    aboutYou,
    languages: [],
    technologies: [],
    interests: []  
  };
  users.push(newUser);
  res.status(200).send();
});

// insert a new answer to a question
// app.post('/answer/:id', (req, res) => {
 //  const {answer} = req.body;

 //  const question = questions.filter(q => (q.id === parseInt(req.params.id)));
 //  if (question.length > 1) return res.status(500).send();
 //  if (question.length === 0) return res.status(404).send();

 //  question[0].answers.push({
   //  answer,
 //  });

 //  res.status(200).send();
// });

// start the server
app.listen(8081, () => {
  console.log('listening on port 8081');
});