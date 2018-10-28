class Song < ActiveRecord::Base
    # AR classes are singular and capitalized by convention
    belongs_to :Artist 

  end
  