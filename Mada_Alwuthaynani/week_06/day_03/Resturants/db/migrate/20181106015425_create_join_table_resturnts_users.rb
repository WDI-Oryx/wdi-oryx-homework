class CreateJoinTableResturntsUsers < ActiveRecord::Migration[5.2]
  def change
    create_join_table :resturnts, :users do |t|
      # t.index [:resturnt_id, :user_id]
      # t.index [:user_id, :resturnt_id]
    end
  end
end
