class AddPriceToLocations < ActiveRecord::Migration[5.2]
  def change
    add_column :locations, :price, :decimal
  end
end
