class CreateChefs < ActiveRecord::Migration[5.2]
  def change
    create_table :chefs do |t|
      t.string :name
      t.date :dob
      t.string :image

      t.timestamps
    end
  end
end
