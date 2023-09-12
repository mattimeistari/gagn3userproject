import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { selectUsers } from "../db/read/read.js";

const router = express.Router();

const dbFile = path.join(fileURLToPath(new URL(".", import.meta.url)), "../db/users.db");

// get index page
router.get("/", (req, res) => {
	const isLoggedIn = true;

	if (!isLoggedIn) {
		res.status(401).redirect("/login?status=loginFail");
	} else {
		const title = "💀💀💀";
		const users = selectUsers(dbFile);
		console.log(users);
    
		res.render("index", {
			title,
			users
		});
	}
});

router.post("/", (req, res) => {

	const isLoggedIn = true;
	
	if (!isLoggedIn) {
		res.status(401).redirect("/login?status=loginFail");
	} else {
		const title = "💀💀💀";
		const users = selectUsers(dbFile);
		console.log(users);
    
		res.render("index", {
			title,
			users
		});
	}

});

export { router } ;