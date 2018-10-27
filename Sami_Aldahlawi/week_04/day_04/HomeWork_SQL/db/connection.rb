require "sqlite3"

ActiveRecord::Base.establish_connection(
  adapter: "sqlite3",
  database: "db/tunr.db",
)
