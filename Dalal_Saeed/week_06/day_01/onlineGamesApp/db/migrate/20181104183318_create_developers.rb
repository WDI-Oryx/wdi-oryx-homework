class CreateDevelopers < ActiveRecord::Migration[5.2]
  def change
    create_table :developers do |t|
      t.string :name
      t.string :location
      t.string :image
      t.string :website

      t.timestamps
    end
  end
end
