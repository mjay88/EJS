const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public"))); //serving the public directory
//this sets view engine to ejs for us so we don't have to require it
app.set("view engine", "ejs");
//takes the current directory name, (where this file (index.js) is located) and join the full path to get here with /views
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
	res.render("home.ejs"); //we do not need the ejs sends we set the view engine to ejs
});

app.get("/rand", (req, res) => {
	const num = Math.floor(Math.random() * 10) + 1;
	res.render("random", { rand: num });
});

app.get("/r/:subreddit", (req, res) => {
	const { subreddit } = req.params;
	res.render("subreddit", { subreddit });
});
app.get("/cats", (req, res) => {
	const cats = ["Mr Bug", "Howl", "Patches", "Cat number 1"];
	res.render("cats", { cats });
});

app.listen(3000, () => {
	console.log(`App listening at port 3000`);
});
