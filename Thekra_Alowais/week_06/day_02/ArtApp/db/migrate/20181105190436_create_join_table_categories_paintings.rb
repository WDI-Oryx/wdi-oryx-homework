class CreateJoinTableCategoriesPaintings < ActiveRecord::Migration[5.2]
  def change
    create_join_table :categories, :paintings, id: false do |t|
      # t.index [:category_id, :painting_id]
      # t.index [:painting_id, :category_id]
    end
  end
end
