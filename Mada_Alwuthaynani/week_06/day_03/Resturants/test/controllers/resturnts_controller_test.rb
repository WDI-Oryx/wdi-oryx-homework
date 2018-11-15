require 'test_helper'

class ResturntsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get resturnts_index_url
    assert_response :success
  end

  test "should get show" do
    get resturnts_show_url
    assert_response :success
  end

end
