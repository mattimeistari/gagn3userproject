import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { readUser } from "../db/read/readUserData.js";

const router = express.Router();

const dbFile = path.join(fileURLToPath(new URL(".", import.meta.url)), "../db/users.db");

// get index page
router.get("/", (req, res) => {

	if (req.session.isLoggedIn) {

		const title = "💀💀💀";

		const user = readUser(dbFile, req.session.username); // pass the username as a second parameter
		console.log(user.orange);
    
		res.render("index", {
			title,
			user
		});
	} else { 
		res.redirect("/"); 
	}

});

export { router };
