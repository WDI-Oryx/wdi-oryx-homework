class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :name
      t.string :album
      t.integer :artist_id

      t.timestamps
    end
  end
end
