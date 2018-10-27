# Tunr 1.0!

## Local Setup

```bash
$ bundle install
```

navigate to the `db` directory and run:
```bash
$ touch schema.sql
$ touch seeds.sql
```
Copy the following into **schema.sql**
```
DROP TABLE IF EXISTS songs;
DROP TABLE IF EXISTS artists;

CREATE TABLE artists(
  id SERIAL PRIMARY KEY,
  name TEXT,
  photo_url TEXT,
  nationality TEXT
);

CREATE TABLE songs(
  id SERIAL PRIMARY KEY,
  title TEXT,
  album TEXT,
  preview_url TEXT,
  artist_id INT
);
```
Copy the content of `seeds.sql` snippet from slack into **seeds.sql**

Run the following commands
```bash
$ sqlite3 tunr.db
sqlite> .database # Lists names and files of attached databases
sqlite> ^D        # CTRL+D => to exit sqlite back to command line
$ sqlite3 tunr.db < schema.sql
$ sqlite3 tunr.db < seeds.sql
```

Open up `app.rb` and write code to solve each part of the homework.
