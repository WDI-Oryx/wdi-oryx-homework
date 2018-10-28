class Song < ActiveRecord::Base
  belongs_to :artist # AR classes are singular and capitalized by convention
end
