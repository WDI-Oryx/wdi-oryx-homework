class AddAuthorIdToStory < ActiveRecord::Migration[5.2]
  def change
    add_column :stories, :Author_id, :integer
  end
end
