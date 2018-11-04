require 'test_helper'

class CheeseContrllerControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get cheese_contrller_index_url
    assert_response :success
  end

  test "should get show" do
    get cheese_contrller_show_url
    assert_response :success
  end

  test "should get creat" do
    get cheese_contrller_creat_url
    assert_response :success
  end

  test "should get edit" do
    get cheese_contrller_edit_url
    assert_response :success
  end

  test "should get destroy" do
    get cheese_contrller_destroy_url
    assert_response :success
  end

end
