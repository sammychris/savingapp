const express  			= require('express');
const routes   			= require('./routes');
const { passport }  = require('./middlewares');
const app      			= express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
	res.send('Testing my server side!');
})

app.get('/login', (req, res) => {
	res.send('Could not login!');
})

// db.select('*').from('test')
// 	.then(a => console.log(a));

// authenticating passport...
passport(app);

// linking our routes...
routes(app);

app.listen(8000, () => console.log('listing on port 8000'));
