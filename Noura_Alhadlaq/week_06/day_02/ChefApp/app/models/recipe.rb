# == Schema Information
#
# Table name: recipes
#
#  id          :integer          not null, primary key
#  title       :string
#  ingredients :text
#  method      :text
#  image       :string
#  chef_id     :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Recipe < ApplicationRecord
  belongs_to :chef
  has_many :comments
end
