CREATE TABLE users (id INTEGER PRIMARY KEY, username TEXT, password TEXT);
CREATE TABLE lancamentos (id INTEGER PRIMARY KEY, designer TEXT, quantidade INTEGER, status TEXT, created_at TEXT);
INSERT INTO users VALUES (1,'Amanda','Amanda123');