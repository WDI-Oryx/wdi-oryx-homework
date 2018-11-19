class CreateArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :articles do |t|
      t.string :title
      t.date :date
      t.integer :journalist_id

      t.timestamps
    end
  end
end
