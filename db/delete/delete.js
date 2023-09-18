import Database from "better-sqlite3";

// delete.js
export const deleteUser = (dbFile, idUser) => {
	const db = new Database(dbFile);
	const stmt = db.prepare("DELETE FROM users WHERE id = ?");
	stmt.run(idUser);
	db.close();
	return true;
};