# == Schema Information
#
# Table name: books
#
#  id         :integer          not null, primary key
#  title      :string
#  blurb      :string
#  image      :string
#  author_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Book < ApplicationRecord
  belongs_to :author

  has_and_belongs_to_many :genres
end
