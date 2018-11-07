class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.string :name
      t.string :key_photo
      t.string :event
      t.string :location

      t.timestamps
    end
  end
end
