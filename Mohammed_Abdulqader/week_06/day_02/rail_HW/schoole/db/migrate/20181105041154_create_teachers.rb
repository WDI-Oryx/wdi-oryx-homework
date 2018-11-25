class CreateTeachers < ActiveRecord::Migration[5.2]
  def change
    create_table :teachers do |t|
      t.string :name
      t.date :dob
      t.string :location
      t.string :course_to_teach

      t.timestamps
    end
  end
end
