// require express and other modules
const express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

const db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

/*
 * JSON API Endpoints
 */
const apiDocumentation = require('./docs/api.json');  // require at runtime so
                          // it's already in memory by the time someone GETs
app.get('/api', (req, res) => res.json(apiDocumentation));

const profileJson = require('./docs/profile.json'); // require at runtime
app.get('/api/profile', (req, res) => res.json(profileJson));

app.get('/api/records', (req, res) => {
  db.Record.find({}, (err, records) => {
    if (err) res.status(500).json(err);
    if (records.length === 0) res.status(404).json({message: "No records found."});
    res.json(records);
  });
});

/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
