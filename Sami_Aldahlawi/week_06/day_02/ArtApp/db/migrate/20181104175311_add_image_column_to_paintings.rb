class AddImageColumnToPaintings < ActiveRecord::Migration[5.2]
  def change
    add_column :paintings, :image, :string
  end
end
