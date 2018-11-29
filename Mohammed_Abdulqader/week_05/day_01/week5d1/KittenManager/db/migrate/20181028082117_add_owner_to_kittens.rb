class AddOwnerToKittens < ActiveRecord::Migration[5.2]
  def change
    add_column :kittens, :owner, :boolean
  end
end
