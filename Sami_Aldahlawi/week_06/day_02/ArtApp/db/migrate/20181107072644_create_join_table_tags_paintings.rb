class CreateJoinTableTagsPaintings < ActiveRecord::Migration[5.2]
  def change
    create_join_table :tags, :paintings, id: false do |t|
      # t.index [:tags_id, :painting_id]
      # t.index [:painting_id, :tags_id]
    end
  end
end
