require 'test_helper'

class DountsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get dounts_index_url
    assert_response :success
  end

  test "should get show" do
    get dounts_show_url
    assert_response :success
  end

  test "should get edit" do
    get dounts_edit_url
    assert_response :success
  end

  test "should get new" do
    get dounts_new_url
    assert_response :success
  end

end
