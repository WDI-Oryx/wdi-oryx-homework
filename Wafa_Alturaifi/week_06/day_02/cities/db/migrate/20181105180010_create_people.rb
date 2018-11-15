class CreatePeople < ActiveRecord::Migration[5.2]
  def change
    create_table :people do |t|
      t.string :name
      t.string :hometown
      t.string :live
      t.string :viste

      t.timestamps
    end
  end
end
