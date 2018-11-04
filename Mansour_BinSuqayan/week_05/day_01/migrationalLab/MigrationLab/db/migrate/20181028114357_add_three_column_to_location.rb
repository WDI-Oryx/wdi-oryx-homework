class AddThreeColumnToLocation < ActiveRecord::Migration[5.2]
  def change
    add_column :locations,:lot,:float
    add_column :locations,:long,:float
    add_column :locations,:name,:string
  end
end
