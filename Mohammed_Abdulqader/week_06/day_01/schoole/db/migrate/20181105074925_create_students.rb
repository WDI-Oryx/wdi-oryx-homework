class CreateStudents < ActiveRecord::Migration[5.2]
  def change
    create_table :students do |t|
      t.string :name
      t.date :dob
      t.string :collige
      t.string :major

      t.timestamps
    end
  end
end
