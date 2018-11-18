class RemoveColumnToArtiest < ActiveRecord::Migration[5.2]
  def change
    remove_column :artiests, :birth_day, :datetime
    add_column :artiests, :birth_day, :date
  end
end
