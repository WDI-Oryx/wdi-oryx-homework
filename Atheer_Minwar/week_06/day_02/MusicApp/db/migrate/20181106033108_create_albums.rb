class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.string :title
      t.string :album_art
      t.date :released
      t.integer :artist_id

      t.timestamps
    end
  end
end
