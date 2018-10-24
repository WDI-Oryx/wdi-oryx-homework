class Artist < ActiveRecord::Base
  has_many :song # AR classes are singular and capitalized by convention
end
