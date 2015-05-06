# Google Auth2 Example

A not very slick example of using the Google sign in for server-side apps flow (https://developers.google.com/identity/sign-in/web/server-side-flow).

Also using the google api node js client (https://github.com/google/google-api-nodejs-client).

Put together quicly from the exmaples scattered over the google developers documentation.

### Required set up

To run locally just create an OAuth 2.0 client ID with javascript origin http://localhost:5667 at the google developers console.

You _may_ also need to enable the google+ API for your project. Not totally sure as Ive not test with and without...

Ammend `CLIENT_ID` and `CLIENT_SECRET` as approirate in `main.js` and `index.html`.



