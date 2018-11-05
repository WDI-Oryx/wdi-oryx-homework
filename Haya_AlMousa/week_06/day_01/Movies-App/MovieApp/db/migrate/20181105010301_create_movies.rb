class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :lead_actor
      t.string :description
      t.integer :director_id

      t.timestamps
    end
  end
end
