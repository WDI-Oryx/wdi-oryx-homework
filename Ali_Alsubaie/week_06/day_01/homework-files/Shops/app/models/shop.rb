# == Schema Information
#
# Table name: shops
#
#  id          :integer          not null, primary key
#  name        :string
#  description :text
#  location    :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Shop < ApplicationRecord
  has_many :products
end
