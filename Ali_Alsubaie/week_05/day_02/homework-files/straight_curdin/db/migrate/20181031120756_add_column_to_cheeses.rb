class AddColumnToCheeses < ActiveRecord::Migration[5.2]
  def change
    add_column :cheeses, :stank_level, :integer, :null => false, :default => 0
  end
end
