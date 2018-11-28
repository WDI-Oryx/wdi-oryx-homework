require 'test_helper'

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get App" do
    get pages_App_url
    assert_response :success
  end

end
