require 'test_helper'

class ComposersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get composers_index_url
    assert_response :success
  end

  test "should get show" do
    get composers_show_url
    assert_response :success
  end

  test "should get new" do
    get composers_new_url
    assert_response :success
  end

  test "should get edit" do
    get composers_edit_url
    assert_response :success
  end

end
