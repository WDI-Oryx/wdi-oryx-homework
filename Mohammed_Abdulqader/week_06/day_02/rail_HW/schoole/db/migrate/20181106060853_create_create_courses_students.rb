# class CreateTableJoinCoursesStudents < ActiveRecord::Migration[5.2]
#   def change
#     create_table :create_courses_students do |t|
#       t.integer :course_id
#       t.integer :student_id

#       t.timestamps
#     end
#   end
# end

class CreateJoinTableCoursesStudents < ActiveRecord::Migration[5.2]
  def change
    create_join_table :courses, :students, id: false do |t|
    end
  end
end
