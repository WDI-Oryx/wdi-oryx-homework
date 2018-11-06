class AddBreedToKitten < ActiveRecord::Migration[5.2]
  def change
    add_column :kittens, :breed, :string
  end
end
