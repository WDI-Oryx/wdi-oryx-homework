# == Schema Information
#
# Table name: authors
#
#  id          :integer          not null, primary key
#  name        :string
#  dob         :date
#  location    :string
#  image       :string
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Author < ApplicationRecord
  has_many :books
end
