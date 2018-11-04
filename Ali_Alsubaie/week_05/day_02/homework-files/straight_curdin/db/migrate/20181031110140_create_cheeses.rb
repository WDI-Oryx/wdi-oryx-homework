class CreateCheeses < ActiveRecord::Migration[5.2]
  def change
    create_table :cheeses do |t|
      t.string :name
      t.string :milk_type
      t.string :description
      t.string :image_url

      t.timestamps
    end
  end
end
