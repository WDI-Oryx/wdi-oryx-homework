# == Schema Information
#
# Table name: students
#
#  id         :integer          not null, primary key
#  name       :string
#  student_id :string
#  semester   :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Student < ApplicationRecord
  has_and_belongs_to_many :courses
  has_many :teachers, through: :courses
end
