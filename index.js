// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const {authId, authToken} = require('./config.js')
const client = require('twilio')(authId, authToken);
const express = require('express');
const path = require('path');
const db = require('./database.js')

const mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Blunderb33!',
  database : 'mvp'
});

const app = express();
app.get('/contacts', (req, res) => {
  connection.query('select * from contacts', function (error, results, fields) {
    if (error) {throw error} 
    else {
      //console.log('results', results);
      res.send(results);
    }
  });
});

app.get('/messages', (req, res) => {
  connection.query('select * from messages', function (error, results, fields) {
    if (error) {throw error} 
    else {
      //console.log('results', results);
      res.send(results);
    }
  });
});

app.post('/call', (req, res) => {
  console.log('req.params', req.params);
  console.log('req body', req.body);
  console.log('req query', req.query);
})


/*
**********
HTML CONTENT
  **********
*/

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname+'/dist/index.html'))
})

app.get('/bundle.js', (req, res) => {
  res.sendFile(path.resolve(__dirname+'/dist/bundle.js'))
})

app.get('/styles.css', (req, res) => {
  res.sendFile(path.resolve(__dirname+'/dist/styles.css'))
})

/*
**********
HTML CONTENT
**********
*/

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});

/*
app.get('/call', (req, res) => {
  //pass in number to
  //pass in corresponding voice xml id num
  client.calls
  .create({
      url: 'http://d15d8d75.ngrok.io/voice.xml',
      to: '+16465191481',
      from: '+12012980027'
    })
  .then(call => console.log(call.sid));
})

app.post('/voice.xml', (req, res) => {
  console.log(req.body);
  console.log(req.params);
  console.log(req.query);
  /*client.calls
  .create({
      url: 'http://d15d8d75.ngrok.io/voice.xml',
      to: '+16465191481',
      from: '+12012980027'
    })
  .then(call => console.log(call.sid));
  res.send(req.body)
});
*/