class CreateArtists < ActiveRecord::Migration[5.2]
  def change
    create_table :artists do |t|
      t.string :name
      t.date :dob
      t.string :nationality
      t.string :image

      t.timestamps
    end
  end
end
