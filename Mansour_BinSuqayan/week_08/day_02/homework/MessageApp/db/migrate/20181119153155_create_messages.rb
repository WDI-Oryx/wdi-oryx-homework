class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.string :content
      t.boolean :completed, default: false

      t.timestamps
    end
  end
end
