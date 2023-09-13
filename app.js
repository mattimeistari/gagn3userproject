/* eslint-disable no-undef */
import express from "express";
import path from "path";
// eslint-disable-next-line no-unused-vars
import colors from "colors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { router as frontRouter } from "./routes/index.js";
import { router as loginRouter } from "./routes/login.js";
import { router as registerRouter } from "./routes/register.js";
import session from "express-session";

const app = express();
dotenv.config();

// for body parser
app.use(express.urlencoded({ extended: false }));

// views and static paths
const viewsPath = path.join(fileURLToPath(new URL(".", import.meta.url)), "views" );
const staticPath = path.join(fileURLToPath(new URL(".", import.meta.url)), "public" );

// serve static files
app.use(express.static(staticPath));

// template engine
app.set("views", viewsPath);
app.set("view engine", "ejs");

// routers
app.use("/", frontRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);

// session
app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: true,
	saveUninitialized: true,
}));

// errors:  not found
app.use((req, res, next) => {
	const err = new Error(" not found");
	err.status = 404;
	next(err);
});

// error handling middleware
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
	res.status(err.status || 500);
	res.render("error", {
		message: err.message || "Something went wrong",
		error: app.get("env") === "development" ? err : {},
	});
});

// start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}...`.green.bold);
});

export default app;
