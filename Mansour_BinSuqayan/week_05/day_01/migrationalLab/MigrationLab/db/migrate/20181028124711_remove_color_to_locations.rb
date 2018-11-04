class RemoveColorToLocations < ActiveRecord::Migration[5.2]
  def change
    remove_column :locations,:color,:string

  end
end
