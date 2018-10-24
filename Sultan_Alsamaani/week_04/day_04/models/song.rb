

class Song < ActiveRecord::Base
   belongs_to :Artist
  # AR classes are singular and capitalized by convention
end
