class AddFlavorToLocations < ActiveRecord::Migration[5.2]
  def change
    add_column :locations, :flavor, :string
  end
end
