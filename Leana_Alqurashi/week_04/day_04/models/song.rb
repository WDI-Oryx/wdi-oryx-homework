# AR classes are singular and capitalized by convention
class Song < ActiveRecord::Base
  belongs_to :artist
end
