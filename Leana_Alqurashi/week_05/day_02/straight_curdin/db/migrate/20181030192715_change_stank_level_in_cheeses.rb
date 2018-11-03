class ChangeStankLevelInCheeses < ActiveRecord::Migration[5.2]
  def change
    change_column_default :cheeses, :stank_level, 0
  end
end
