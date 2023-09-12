import express from "express";
import bcrypt from "bcrypt";
import path from "path";
import { fileURLToPath } from "url";
import { createUsers } from "../db/insert/registerUser.js";

const router = express.Router();

const dbFile = path.join(fileURLToPath(new URL(".", import.meta.url)), "../db/users.db");

// get register page
router.get("/", (req, res) => {

	const title = "🕸️🕸️🕸️";

	const header = "sign up";

	res.render("register", {
		title,
		header
	});

});


router.post("/", (req, res) => {
	const passwordHash = bcrypt.hashSync(req.body.password, 10);
	createUsers(dbFile, req.body.email, req.body.username, req.body.firstName, req.body.lastName, passwordHash);

	res.redirect("/");
});

// Export the router
export { router };