class CreateKittens < ActiveRecord::Migration[5.2]
  def change
    create_table :kittens do |t|

      t.timestamps
    end
  end
end
