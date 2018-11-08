class AddColumnToCourses < ActiveRecord::Migration[5.2]
  def change
    add_column :courses, :math, :string
    add_column :courses, :algebra, :string
    add_column :courses, :chemistry, :string
    add_column :courses, :hour_in_week, :integer
  end
end
