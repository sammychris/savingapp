const express = require('express');

const db = require('./models');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
	res.send('Testing my server side!');
})

// db.select('*').from('test')
// 	.then(a => console.log(a));

// linking our routes...
require('./routes')(app);

app.listen(8000, () => console.log('listing on port 8000'));
