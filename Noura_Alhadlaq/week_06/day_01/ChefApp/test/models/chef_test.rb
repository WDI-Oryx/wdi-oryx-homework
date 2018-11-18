# == Schema Information
#
# Table name: chefs
#
#  id         :integer          not null, primary key
#  name       :string
#  dob        :date
#  image      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class ChefTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
