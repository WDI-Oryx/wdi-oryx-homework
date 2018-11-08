class CreateJoinTableOwnersStores < ActiveRecord::Migration[5.2]
  def change
    create_join_table :owners, :stores, id: false do |t|
      # t.index [:owner_id, :store_id]
      # t.index [:store_id, :owner_id]
    end
  end
end
