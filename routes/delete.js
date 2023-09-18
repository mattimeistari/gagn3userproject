import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { deleteUser } from "../db/delete/delete.js";

const dbFile = path.join(fileURLToPath(new URL(".", import.meta.url)), "../db/users.db");

const router = express.Router();

// get login page
router.get("/", (req, res) => {
	res.redirect("/");
});

// post login page
router.post("/", (req, res) => {
	deleteUser(dbFile, req.body.idUser);
	res.redirect("/");
});

export { router } ;