class RemoveCourseIdFromStudents < ActiveRecord::Migration[5.2]
  def change
    remove_column :students, :course_id, :string
  end
end
