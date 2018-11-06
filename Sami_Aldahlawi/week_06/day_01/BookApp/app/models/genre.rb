# == Schema Information
#
# Table name: genres
#
#  id   :integer          not null, primary key
#  name :string
#

class Genre < ApplicationRecord
  has_and_belongs_to_many :books
end
