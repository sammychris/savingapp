const db            = require('../models');
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;



const opts = {}

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;


module.exports = function (passport) {
    passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
        db('users').where({ id: jwt_payload.id })
            .then(user => {
                console.log(user)
                if (!user) return done(null, false);
                return done(null, user);
            })
            .catch(err => done(err, false));
    }));
}
