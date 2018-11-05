# == Schema Information
#
# Table name: directors
#
#  id         :integer          not null, primary key
#  name       :string
#  dob        :date
#  country    :string
#  image      :string
#  films      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Director < ApplicationRecord
  has_many :films
  has_many :genres, through: :films
end
