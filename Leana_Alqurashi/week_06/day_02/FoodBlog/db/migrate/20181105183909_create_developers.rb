class CreateDevelopers < ActiveRecord::Migration[5.2]
  def change
    create_table :developers do |t|
      t.string :name
      t.string :country
      t.string :image

      t.timestamps
    end
  end
end
