import Database from "better-sqlite3";

// read from the database
export const readUser = (dbFile, username) => {
	try {
		const db = new Database(dbFile);
		const stmt = db.prepare("SELECT * FROM users WHERE username = ?");
		const user = stmt.get(username);
		db.close();
		return user;
	} catch (error) {
		console.error("Error selecting users:", error.message);
		return [];
	}
};