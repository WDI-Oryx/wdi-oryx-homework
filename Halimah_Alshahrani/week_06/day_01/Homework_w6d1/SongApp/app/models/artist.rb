# == Schema Information
#
# Table name: artists
#
#  id          :integer          not null, primary key
#  name        :string
#  dob         :date
#  nationality :string
#  image       :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Artist < ApplicationRecord
  has_many :songs
  has_many :song_types, through: :songs
end
