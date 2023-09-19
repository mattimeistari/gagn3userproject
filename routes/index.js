import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { selectUsers } from "../db/read/read.js";

const router = express.Router();

const dbFile = path.join(fileURLToPath(new URL(".", import.meta.url)), "../db/users.db");

// get index page
router.get("/", (req, res) => {

	if (req.session.isLoggedIn) {

		const title = "💀💀💀";

		const user = selectUsers(dbFile);
		console.log(user);
    
		res.render("index", {
			title,
			user
		});
	} else { 
		res.redirect("/login");
	}

});

export { router };
