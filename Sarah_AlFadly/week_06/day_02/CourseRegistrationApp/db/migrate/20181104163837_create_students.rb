class CreateStudents < ActiveRecord::Migration[5.2]
  def change
    create_table :students do |t|
      t.string :name
      t.string :student_id
      t.string :semester
      t.string :course_id

      t.timestamps
    end
  end
end
