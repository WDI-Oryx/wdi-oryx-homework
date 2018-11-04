class CreateSecrets < ActiveRecord::Migration[5.2]
  def change
    create_table :secrets do |t|
      t.integer :num

      t.timestamps
    end
  end
end
