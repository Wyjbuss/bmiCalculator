const express = require("express");
const bodyParser = require("body-parser")

const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({
	// body parser requries you to set the extended value
	// urlencoded is for html parsing. gets access to the form data
	extended: true
}));



app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html')
});

app.get('/bmicalculator', function(req, res) {
	res.sendFile(__dirname + '/bmiCalculator.html')
});

app.post('/', function(req, res) {
	console.log(req.body);
	// using the req.body we can parse the form data

	let num1 = Number(req.body.n1); // num1 is the "name" we gave it on the html form
	let num2 = Number(req.body.n2);

	let result = num1 + num2;
	res.send(`The result of the calculation is ${result}`);
});

app.post('/bmicalculator', function(req, res) {
	let w = parseFloat(req.body.weight);
	let h = parseFloat(req.body.height);

	let bmi = w / (h * h);
	res.send(`Your BMI is ${bmi}`);
});

app.listen(port, function() {
	console.log(`app listening at localhost: ${port}`);
});
