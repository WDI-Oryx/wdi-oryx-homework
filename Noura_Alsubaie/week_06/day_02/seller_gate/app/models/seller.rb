# == Schema Information
#
# Table name: sellers
#
#  id         :integer          not null, primary key
#  name       :string
#  email      :string
#  rating     :decimal(, )
#  location   :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#



class Seller < ApplicationRecord
    has_many :products
end
