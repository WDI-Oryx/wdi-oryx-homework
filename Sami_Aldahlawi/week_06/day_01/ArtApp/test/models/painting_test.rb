# == Schema Information
#
# Table name: paintings
#
#  id          :integer          not null, primary key
#  title       :string
#  description :string
#  price       :float
#  artiest_id  :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class PaintingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
