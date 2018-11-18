class CreateJoinTableCoursesTeachers < ActiveRecord::Migration[5.2]
  def change
    create_join_table :courses, :teachers, id: false do |t|
      # t.index [:course_id, :teacher_id]
      # t.index [:teacher_id, :course_id]
    end
  end
end
