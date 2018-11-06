class Article < ApplicationRecord
  belongs_to :journalist
  has_and_belongs_to_many :fields
end
