class AddStankLevelToCheeses < ActiveRecord::Migration[5.2]
  def change
    add_column :cheeses, :Stank_level, :integer,0
  end
end
