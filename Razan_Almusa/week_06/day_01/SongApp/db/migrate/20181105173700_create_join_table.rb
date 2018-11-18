class CreateJoinTable < ActiveRecord::Migration[5.2]
  def change
    create_join_table :genres, :songs, id: false do |t|
      # t.index [:genre_id, :song_id]
      # t.index [:song_id, :genre_id]
    end
  end
end
