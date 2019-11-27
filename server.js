const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('Testing my server side!');
})

app.listen(8000, () => console.log('listing on port 8000'));
