require 'test_helper'

class CheeseControllerControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get cheese_controller_index_url
    assert_response :success
  end

  test "should get show" do
    get cheese_controller_show_url
    assert_response :success
  end

  test "should get new" do
    get cheese_controller_new_url
    assert_response :success
  end

  test "should get create" do
    get cheese_controller_create_url
    assert_response :success
  end

  test "should get edit" do
    get cheese_controller_edit_url
    assert_response :success
  end

  test "should get destroy" do
    get cheese_controller_destroy_url
    assert_response :success
  end

  test "should get update" do
    get cheese_controller_update_url
    assert_response :success
  end

end
