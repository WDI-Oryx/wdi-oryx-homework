require 'test_helper'

class DonutsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get donuts_index_url
    assert_response :success
  end

  test "should get show" do
    get donuts_show_url
    assert_response :success
  end

  test "should get edit" do
    get donuts_edit_url
    assert_response :success
  end

  test "should get new" do
    get donuts_new_url
    assert_response :success
  end

end
