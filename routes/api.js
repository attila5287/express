module.exports = function (app) {
// app.use(express.static("public"));
const fs = require("fs");
const path = require("path");
// GET
app.get("/api/notes", function (req, res) {
	fs.readFile("./db/db.json", function (err, data) {
		if (err) {
			console.log("err :>> ", err);
		}
		res.json(JSON.parse(data));
	});
});

// POST
app.post("/api/notes", function (req, res) {
	console.log('req');
	console.log(req.body);
	
	let dj; // data-JSON array of json objects
	
	fs.readFile("db/db.json", function (err, data) {
		dj = JSON.parse(data); // current data
		
		// console.log('dj :>> ', dj);

		dj.push(req.body); // push into array
		fs.writeFile("db/db.json", JSON.stringify(dj), (err) => {
			console.log('err :>> ', err);

			console.log("write on file success");
		});

	});

});

app.delete("/api/notes", () => {
	console.log('ADD DELETE METHOD');
	
})

// dtt
};
