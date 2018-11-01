require "sqlite3"
require "pry"

##AR = Active Record
##result_as_hash
## SQLite3 is a module (a collection of classes)
## Database is a class within SQLite3
db = SQLite3::Database.new("database.db")

sql = "SELECT * FROM products"

# sqlite3 database.db < ___________
products = db.execute(sql)

p products
