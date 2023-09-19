import Database from "better-sqlite3";

// read.js
export const createUsers = (dbFile, email, username, firstName, lastName, password) => {
	const db = new Database(dbFile);
	const stmt = db.prepare("INSERT INTO Users(email, username, firstName, lastName, password ) VALUES (?, ?, ?, ?, ?)");
	stmt.run(email, username, firstName, lastName, password);
	db.close();
	return true;
};