# == Schema Information
#
# Table name: chefs
#
#  id         :integer          not null, primary key
#  name       :string
#  dob        :date
#  image      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Chef < ApplicationRecord
  has_many :recipes
end
