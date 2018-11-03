class AddColumnsToLocation < ActiveRecord::Migration[5.2]
  def change
    add_column :locations, :lat, :decimal
    add_column :locations, :long, :decimal
    add_column :locations, :name, :string
  end
end
