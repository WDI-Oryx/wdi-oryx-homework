class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name
      t.string :sku
      t.decimal :price
      t.references :cheese
      t.timestamps
    end
  end
end
