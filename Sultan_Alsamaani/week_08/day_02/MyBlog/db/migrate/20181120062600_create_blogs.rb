class CreateBlogs < ActiveRecord::Migration[5.2]
  def change
    create_table :blogs do |t|
      t.string :title
      t.string :content
      t.boolean :active, default: false

      t.timestamps
    end
  end
end
