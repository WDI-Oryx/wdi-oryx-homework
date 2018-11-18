class CreateCompositions < ActiveRecord::Migration[5.2]
  def change
    create_table :compositions do |t|
      t.string :title
      t.string :description
      t.string :music_type
      t.integer :music_id

      t.timestamps
    end
  end
end
