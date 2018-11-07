class CreateArtiests < ActiveRecord::Migration[5.2]
  def change
    create_table :artiests do |t|
      t.string :name
      t.string :nationality
      t.datetime :birth_day

      t.timestamps
    end
  end
end
