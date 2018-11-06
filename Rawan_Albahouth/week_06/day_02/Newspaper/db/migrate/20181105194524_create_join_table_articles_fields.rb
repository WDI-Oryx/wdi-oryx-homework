class CreateJoinTableArticlesFields < ActiveRecord::Migration[5.2]
  def change
    create_join_table :articles, :fields, id: false do |t|
      # t.index [:article_id, :field_id]
      # t.index [:field_id, :article_id]
    end
  end
end
