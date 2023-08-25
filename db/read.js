import Database from "better-sqlite3";

// read.js
export const selectUsers = (dbFile) => {
    try {
        const db = new Database(dbFile);
        const stmt = db.prepare(`SELECT * FROM users`);
        const users = stmt.all();
        db.close();
        return users;
    } catch (error) {
        console.error('Error selecting users:', error.message);
        return [];
    }
};