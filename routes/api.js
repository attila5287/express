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
	console.log(req);
	console.log('---');
	fs.readFile("./db/db.json", function (err, data) {
	fs.writeFile("./db/db.json", res.json(JSON.parse(data).push(req.body)), () => { console.log('success write');
		
	})
	});
});


// ---
// dtt
// ---
};
