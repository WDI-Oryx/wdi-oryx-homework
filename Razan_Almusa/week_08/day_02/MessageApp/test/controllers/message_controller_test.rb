require 'test_helper'

class MessageControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get message_index_url
    assert_response :success
  end

  test "should get show" do
    get message_show_url
    assert_response :success
  end

  test "should get new" do
    get message_new_url
    assert_response :success
  end

  test "should get edit" do
    get message_edit_url
    assert_response :success
  end

end
