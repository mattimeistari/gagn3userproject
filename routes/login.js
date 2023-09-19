import express from "express";
import bcrypt from "bcrypt";
import path from "path";
import { fileURLToPath } from "url";
import { readUser } from "../db/read/readUserData.js";
import { log } from "console";

const router = express.Router();

const dbFile = path.join(fileURLToPath(new URL(".", import.meta.url)), "../db/users.db");

// get register page
router.get("/", (req, res) => {

	const title = "😈😈😈";
    
	const header = "log in";
	res.render("login", {
		title,
		header
	});

});

router.post("/", (req, res) => {

	const user = readUser(dbFile, req.body.username);
	console.log(user);

	if (user) {
		const passwordMatch = bcrypt.compareSync(req.body.password, user.password);

		if (passwordMatch) {
			req.session.user = user;
			req.session.isLoggedIn = true;

			console.log(req.session.user);
			console.log(req.session.isLoggedIn);

			res.redirect("/");
			return;
		} else {
			res.redirect("/");
		}
		
	}});

// Export the router
export { router };
