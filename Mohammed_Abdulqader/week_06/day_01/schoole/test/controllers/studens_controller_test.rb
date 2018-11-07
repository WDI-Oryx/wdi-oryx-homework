require 'test_helper'

class StudensControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get studens_index_url
    assert_response :success
  end

  test "should get show" do
    get studens_show_url
    assert_response :success
  end

  test "should get new" do
    get studens_new_url
    assert_response :success
  end

  test "should get edit" do
    get studens_edit_url
    assert_response :success
  end

end
