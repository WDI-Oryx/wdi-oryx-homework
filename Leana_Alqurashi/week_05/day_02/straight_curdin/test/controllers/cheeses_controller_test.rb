require 'test_helper'

class CheesesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get cheeses_index_url
    assert_response :success
  end

  test "should get show" do
    get cheeses_show_url
    assert_response :success
  end

  test "should get create" do
    get cheeses_create_url
    assert_response :success
  end

end
