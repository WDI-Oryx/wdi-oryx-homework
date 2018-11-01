class Artist < ActiveRecord::Base
  has_many :songs # AR classes are singular and capitalized by convention
end
