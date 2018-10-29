class RemoveColumnsFromKittens < ActiveRecord::Migration[5.2]
  def change
    remove_column :kittens, :owner, :boolean
    add_column :kittens, :owner, :boolean
  end
end
