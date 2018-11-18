class CreateJoinTableGamesGenres < ActiveRecord::Migration[5.2]
  def change
    create_join_table :games, :genres, id: false do |t|
      # t.index [:game_id, :genre_id]
      # t.index [:genre_id, :game_id]
    end
  end
end
