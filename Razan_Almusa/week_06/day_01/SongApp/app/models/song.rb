class Song < ApplicationRecord
  belongs_to :singer
  has_and_belongs_to_many :genres
end
