class AddIdToPainting < ActiveRecord::Migration[5.2]
  def change
    add_column :paintings, :artist_id, :integer
  end
end
