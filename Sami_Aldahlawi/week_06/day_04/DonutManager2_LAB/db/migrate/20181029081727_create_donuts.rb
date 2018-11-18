class CreateDonuts < ActiveRecord::Migration[5.2]
  def change
    create_table :donuts do |t|
      t.string :name
      t.string :size
      t.string :frosting_type

      t.timestamps
    end
  end
end
