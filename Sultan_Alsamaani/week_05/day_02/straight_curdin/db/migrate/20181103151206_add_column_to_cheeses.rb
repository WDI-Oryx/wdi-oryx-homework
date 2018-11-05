class AddColumnToCheeses < ActiveRecord::Migration[5.2]
  def change
    add_column :cheeses,:stank_level, :integer, :default => 0

  end
end
