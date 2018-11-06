# == Schema Information
#
# Table name: recipes
#
#  id          :integer          not null, primary key
#  title       :string
#  ingredients :text
#  method      :text
#  image       :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Recipe < ApplicationRecord
  belongs_to :chef
end
