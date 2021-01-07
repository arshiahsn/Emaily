const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

passport.use(new GoogleStrategy());

//1036918324009-6qll8suj82r0faa6a38rtjap5luqnijg.apps.googleusercontent.com
//Kom5G_1kJFQ8s5A-JH2hUYAK 



const PORT = process.env.PORT || 5000;
app.listen(PORT);