module.exports = function (app) {
// app.use(express.static("public"));
const fs = require("fs");
const path = require("path");

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
	let dj;
	fs.readFile("db/db.json", function (err, data) {
		dj = JSON.parse(data); // data json
		console.log('dj :>> ', dj);
		dj.push(req.body);
		fs.writeFile("db/db.json", JSON.stringify(dj), () => {
			console.log("write on file success");
		});		

	});

});

// dtt
};
