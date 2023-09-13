import Database from "better-sqlite3";

// read.js
export const createUsers = (dbFile, email, username, firstName, lastName, password, birthdate) => {
	const db = new Database(dbFile);
	const stmt = db.prepare("INSERT INTO Users(email, username, firstName, lastName, password, birthdate) VALUES (?, ?, ?, ?, ?, ?)");
	stmt.run(email, username, firstName, lastName, password, birthdate);
	db.close();
	return true;
};