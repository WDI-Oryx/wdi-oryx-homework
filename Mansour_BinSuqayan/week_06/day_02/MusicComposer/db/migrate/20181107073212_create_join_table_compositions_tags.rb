class CreateJoinTableCompositionsTags < ActiveRecord::Migration[5.2]
  def change
    create_join_table :compositions, :tags, id: false do |t|
      # t.index [:composition_id, :tag_id]
      # t.index [:tag_id, :composition_id]
    end
  end
end
