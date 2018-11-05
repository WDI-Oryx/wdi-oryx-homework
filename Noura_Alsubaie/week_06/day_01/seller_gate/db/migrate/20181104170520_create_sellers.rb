class CreateSellers < ActiveRecord::Migration[5.2]
  def change
    create_table :sellers do |t|
      t.string :name
      t.string :email
      t.decimal :rating
      t.string :location

      t.timestamps
    end
  end
end
