class CreateJournalists < ActiveRecord::Migration[5.2]
  def change
    create_table :journalists do |t|
      t.string :name
      t.integer :age
      t.string :article_field

      t.timestamps
    end
  end
end
