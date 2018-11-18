class CreateArtists < ActiveRecord::Migration[5.2]
  def change
    create_table :artists do |t|
      t.string :name
      t.date :formed
      t.string :genres
      t.string :website
      t.string :image

      t.timestamps
    end
  end
end
