class RemoveLatFromLocations < ActiveRecord::Migration[5.2]
  def change
    remove_column :locations, :lat, :decimal
    remove_column :locations, :long, :decimal
  end
end
