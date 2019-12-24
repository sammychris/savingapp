const passport         = require('passport');
const JwtStrategy      = require('passport-jwt').Strategy,
    ExtractJwt         = require('passport-jwt').ExtractJwt;
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy   = require('passport-google-oauth');
const db               = require('../models');



const opts = {}

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey    = process.env.JWT_SECRET;



passport.serializeUser(function(user, done) {
  done(null, user);
});


passport.deserializeUser(function(obj, done) {
  done(null, obj);
});


// Jwt Strategy....
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    db('users').where({ id: jwt_payload.id })
        .then(user => {
            console.log(user)
            if (!user) return done(null, false);
            return done(null, user);
        })
        .catch(err => done(err, false));
}));


// Facebook Strategy...
passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:8000/auth/facebook/callback",
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(accessToken );
    // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
    let obj = {};
    obj.firstname = 'Samuel';
    obj.lastname = 'okanume';
    done(null, profile)
  }
));