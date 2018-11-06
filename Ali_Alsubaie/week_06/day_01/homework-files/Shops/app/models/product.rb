# == Schema Information
#
# Table name: products
#
#  id          :integer          not null, primary key
#  name        :string
#  brand       :string
#  description :text
#  price       :float
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  shop_id     :string
#

class Product < ApplicationRecord
  belongs_to :shop
end
