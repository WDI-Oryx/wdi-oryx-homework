
## Convention over Configuration
require "sqlite3"
require "active_record"

ActiveRecord::Base.establish_connection(
  adapter: "sqlite3",
  database: "groceries.db",
)

ActiveRecord::Schema.define do
  create_table :food_items, force: true do |t|
    t.string :name
    t.integer :quantity
    t.boolean :healthy
  end
end
