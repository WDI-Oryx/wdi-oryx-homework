class RemoveColumnToComposition < ActiveRecord::Migration[5.2]
  def change
    remove_column :compositions,:music_id,:integer
    add_column :compositions,:composer_id,:integer
  end
end
