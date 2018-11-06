# == Schema Information
#
# Table name: song_types
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class SongType < ApplicationRecord
  has_and_belongs_to_many :songs
end
