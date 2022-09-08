const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.send('<h1>Hello from express!</h1>');
});

app.listen(5000, () => {
	console.log(`App is ruuning on port 5000`);
});
