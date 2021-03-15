module.exports = function (app) {
const fs = require("fs");
const path = require("path");

app.get("/api/notes", function (req, res) {
	fs.readFile("./db/db.json", function (err, data) {
		if (err) {
			console.log("err :>> ", err);
		}
		console.log("JSON.parse(data)");
		console.log(JSON.parse(data));
		res.json(JSON.parse(data));
	});
});

	// API GET Requests
	// Below code handles when users "visit" a page.
	// In each of the below cases when a user visits a link
	// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
	// ---------------------------------------------------------------------------

	// ---------------------------------------------------------------------------
	// I added this below code so you could clear out the table while working with the functionality.
	// Don"t worry about it!

	app.post("/api/clear", function (req, res) {
		// Empty out the arrays of data
		tableData.length = 0;
		waitListData.length = 0;

		res.json({ ok: true });
	});
};
