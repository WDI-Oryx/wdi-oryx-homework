# == Schema Information
#
# Table name: paintings
#
#  id          :integer          not null, primary key
#  title       :string
#  description :string
#  price       :float
#  artiest_id  :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Painting < ApplicationRecord
  belongs_to :artiest
  has_and_belongs_to_many :tags
end
