class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.string :title
      t.text :ingredients
      t.text :method
      t.string :image
      t.integer "chef_id"

      t.timestamps
    end
  end
end
