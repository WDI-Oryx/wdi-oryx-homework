class CreateClasses < ActiveRecord::Migration[5.2]
  def change
    create_table :classes do |t|
      t.integer :id
      t.string :title
      t.string :description

      t.timestamps
    end
  end
end
