class CreateCities < ActiveRecord::Migration[5.2]
  def change
    create_table :cities do |t|
      t.string :name
      t.string :capital
      t.string :timezone
      t.string :country_id
      t.string :integer

      t.timestamps
    end
  end
end
