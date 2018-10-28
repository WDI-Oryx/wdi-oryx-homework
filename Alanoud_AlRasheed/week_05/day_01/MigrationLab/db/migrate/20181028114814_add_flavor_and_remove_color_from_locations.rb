class AddFlavorAndRemoveColorFromLocations < ActiveRecord::Migration[5.2]
  def change
    add_column :locations, :flavor, :string
    remove_column :locations, :color, :string
  end
end
