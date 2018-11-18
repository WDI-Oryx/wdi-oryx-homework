require 'test_helper'

class CheesesControllerControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get cheeses_controller_index_url
    assert_response :success
  end

  test "should get show" do
    get cheeses_controller_show_url
    assert_response :success
  end

  test "should get create" do
    get cheeses_controller_create_url
    assert_response :success
  end

end
