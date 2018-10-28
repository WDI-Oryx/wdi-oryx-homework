# Tunr 1.0!

## Local Setup

```bash
$ bundle install
```

navigate to the `db` directory and run:
```bash
$ sqlite3 tunr.db
sqlite> .database # Lists names and files of attached databases
sqlite> ^D        # CTRL+D => to exit sqlite back to command line
$ sqlite3 tunr.db < schema.sql
$ sqlite3 tunr.db < seeds.sql
```

Open up `app.rb` and write code to solve each part of the homework.
