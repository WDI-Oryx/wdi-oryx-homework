require 'test_helper'

class SingersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get singers_index_url
    assert_response :success
  end

  test "should get show" do
    get singers_show_url
    assert_response :success
  end

  test "should get edit" do
    get singers_edit_url
    assert_response :success
  end

end
