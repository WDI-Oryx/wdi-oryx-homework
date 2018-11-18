class CreateJoinTableBooksGenres < ActiveRecord::Migration[5.2]
  def change
    create_join_table :books, :genres, id: false do |t|
      # t.index [:book_id, :genre_id]
      # t.index [:genre_id, :book_id]
    end
  end
end
