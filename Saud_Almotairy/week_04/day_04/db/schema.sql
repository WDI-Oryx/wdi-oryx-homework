DROP TABLE IF EXISTS songs;
DROP TABLE IF EXISTS artists;

CREATE TABLE artists(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  photo_url TEXT,
  nationality TEXT,
  year INTEGER
);

CREATE TABLE songs(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  album TEXT,
  preview_url TEXT,
  artist_id INTEGER
);