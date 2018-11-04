class AddStankLevel < ActiveRecord::Migration[5.2]
  def change
    add_column :cheese, :stank_level, :integer, :default => 0
  end
end
