# == Schema Information
#
# Table name: artiests
#
#  id          :integer          not null, primary key
#  name        :string
#  nationality :string
#  birth_day   :datetime
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Artiest < ApplicationRecord
  has_many :paintings
  
end
