require 'test_helper'

class CeeseControllerControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get ceese_controller_index_url
    assert_response :success
  end

  test "should get show" do
    get ceese_controller_show_url
    assert_response :success
  end

  test "should get new" do
    get ceese_controller_new_url
    assert_response :success
  end

  test "should get create" do
    get ceese_controller_create_url
    assert_response :success
  end

  test "should get edit" do
    get ceese_controller_edit_url
    assert_response :success
  end

  test "should get destroy" do
    get ceese_controller_destroy_url
    assert_response :success
  end

  test "should get update" do
    get ceese_controller_update_url
    assert_response :success
  end

end
