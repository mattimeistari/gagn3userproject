CREATE TABLE users (
id INTEGER PRIMARY KEY AUTOINCREMENT,
userName VARCHAR(16) UNIQUE NOT NULL,
firstName VARCHAR(255) NOT NULL,
lastName VARCHAR(255) NOT NULL,
password VARCHAR(255) NOT NULL,
email VARCHAR(255) UNIQUE NOT NULL,
mobilePhone VARCHAR(255) UNIQUE,
pfps VARCHAR(255) DEFAULT null,
flags INTEGER DEFAULT 0 NOT NULL,
lastLogin TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
registeredAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);