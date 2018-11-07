class CreateJoinTableSongsSongTypes < ActiveRecord::Migration[5.2]
  def change
    create_join_table :songs, :song_types do |t|
      # t.index [:song_id, :song_type_id]
      # t.index [:song_type_id, :song_id]
    end
  end
end
