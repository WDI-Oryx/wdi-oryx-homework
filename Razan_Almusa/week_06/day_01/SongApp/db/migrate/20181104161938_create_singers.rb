class CreateSingers < ActiveRecord::Migration[5.2]
  def change
    create_table :singers do |t|
      t.string :name
      t.date :dob
      t.string :nationality
      t.string :gender

      t.timestamps
    end
  end
end
