class Remove < ActiveRecord::Migration[5.2]
  def change
    remove_column :composers, :birthday, :datetime
    add_column :composers, :birthday, :date
  end
end
