class Artist < ActiveRecord::Base
  has_many :songs
end

class AddyearToArtists < ActiveRecord::Migration[5.0]
  def change
    add_column :artists, :year, :integer
  end
end
