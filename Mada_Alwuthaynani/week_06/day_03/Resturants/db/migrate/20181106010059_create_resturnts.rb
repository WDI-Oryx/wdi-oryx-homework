class CreateResturnts < ActiveRecord::Migration[5.2]
  def change
    create_table :resturnts do |t|
      t.string :name

      t.timestamps
    end
  end
end
