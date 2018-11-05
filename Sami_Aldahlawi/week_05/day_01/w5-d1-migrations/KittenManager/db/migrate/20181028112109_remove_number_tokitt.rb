class RemoveNumberTokitt < ActiveRecord::Migration[5.2]
  def change
    remove_column :kittens, :number, :integer
  end
end
