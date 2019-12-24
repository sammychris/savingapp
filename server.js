const express  			= require('express');
const passport      = require('passport');
const routes   			= require('./routes');
const cors 					= require("cors");
const app      			= express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// db.select('*').from('test')
// 	.then(a => console.log(a));


// Initiallize Passport...
app.use(passport.initialize());

// linking our routes...
routes(app);

app.listen(8000, () => console.log('listing on port 8000'));
