require 'test_helper'

class CheeseControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get cheese_index_url
    assert_response :success
  end

  test "should get show" do
    get cheese_show_url
    assert_response :success
  end

  test "should get new" do
    get cheese_new_url
    assert_response :success
  end

  test "should get create" do
    get cheese_create_url
    assert_response :success
  end

  test "should get edit" do
    get cheese_edit_url
    assert_response :success
  end

  test "should get destroy" do
    get cheese_destroy_url
    assert_response :success
  end

  test "should get update" do
    get cheese_update_url
    assert_response :success
  end

end
