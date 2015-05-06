var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    google = require('googleapis'),
    OAuth2 = google.auth.OAuth2,
    oauth2Client = new OAuth2('CLIENT_ID',
                            'CLIENT_SECRET', 
                            'postmessage'); // Do not change this paramter

app = express();
app.use(morgan('dev'));
app.use(express.static('static'));

// path to recieve code posted from client side JS.
app.post('/googleoauth2callback', bodyParser.json(), function (req, res) {
    console.log('CODE:');
    console.log(req.body.code);
    oauth2Client.getToken(req.body.code, function(err, tokens) {
      // Now tokens contains an access_token and maybe a refresh_token.
      if(!err) {
        console.log('TOKENS:')
        console.log(tokens);
        
        oauth2Client.setCredentials(tokens);
        var plus = google.plus('v1');
        plus.people.get({ userId: 'me', auth: oauth2Client }, function(err2, response) {
            // handle err and response
            if (err2) {
                console.log('Error:', err2);
                res.end('Error 2')
            } else {
                console.log('Successful responce from google+ API:');
                console.log(response);
                res.end('Success');
            }
            
        });
      } else {
            console.log(err);
            res.end('Error 1')
        }
    });

});

app.listen(5667);
console.log('Listening on port 5667');



