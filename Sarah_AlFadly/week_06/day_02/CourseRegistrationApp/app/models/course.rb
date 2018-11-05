# == Schema Information
#
# Table name: courses
#
#  id         :integer          not null, primary key
#  name       :string
#  course_id  :string
#  department :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Course < ApplicationRecord
  has_and_belongs_to_many :students
  has_and_belongs_to_many :teachers
end
