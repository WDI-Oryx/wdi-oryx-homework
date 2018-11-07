require 'test_helper'

class CheesesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get cheeses_index_url
    assert_response :success
  end

  test "should get new" do
    get cheeses_new_url
    assert_response :success
  end

  test "should get edit" do
    get cheeses_edit_url
    assert_response :success
  end

  test "should get show" do
    get cheeses_show_url
    assert_response :success
  end

end
