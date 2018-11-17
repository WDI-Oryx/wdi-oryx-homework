class City < ApplicationRecord
  belongs_to :country
  has_and_belongs_to_many :persons
end
