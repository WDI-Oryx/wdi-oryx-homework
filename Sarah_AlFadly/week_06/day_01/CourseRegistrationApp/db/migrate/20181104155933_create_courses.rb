class CreateCourses < ActiveRecord::Migration[5.2]
  def change
    create_table :courses do |t|
      t.string :name
      t.string :course_id
      t.string :department

      t.timestamps
    end
  end
end
