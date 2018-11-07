class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :image
      t.string :time
      t.string :description

      t.timestamps
    end
  end
end
