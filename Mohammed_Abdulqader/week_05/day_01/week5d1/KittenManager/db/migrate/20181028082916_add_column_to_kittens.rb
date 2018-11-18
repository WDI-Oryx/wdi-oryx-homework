class AddColumnToKittens < ActiveRecord::Migration[5.2]
  def change
    add_column :kittens, :number, :integer
  end
end
