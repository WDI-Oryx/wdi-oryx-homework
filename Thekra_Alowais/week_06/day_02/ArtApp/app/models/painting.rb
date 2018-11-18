class Painting < ApplicationRecord
  belongs_to :artist
  has_and_belongs_to_many :categories
end
