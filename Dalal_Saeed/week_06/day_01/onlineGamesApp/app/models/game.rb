class Game < ApplicationRecord
  belongs_to :developer
  has_and_belongs_to_many :genres
end
