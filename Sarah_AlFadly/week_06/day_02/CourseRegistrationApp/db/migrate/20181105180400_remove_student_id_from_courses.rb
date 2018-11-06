class RemoveStudentIdFromCourses < ActiveRecord::Migration[5.2]
  def change
    remove_column :courses, :student_id, :integer
  end
end
