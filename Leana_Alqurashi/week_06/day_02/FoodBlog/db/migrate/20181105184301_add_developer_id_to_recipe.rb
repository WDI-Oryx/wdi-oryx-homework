class AddDeveloperIdToRecipe < ActiveRecord::Migration[5.2]
  def change
    add_column :recipes, :developer_id, :integer
  end
end
