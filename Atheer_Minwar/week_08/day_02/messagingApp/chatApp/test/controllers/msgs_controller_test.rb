require 'test_helper'

class MsgsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get msgs_index_url
    assert_response :success
  end

  test "should get new" do
    get msgs_new_url
    assert_response :success
  end

  test "should get create" do
    get msgs_create_url
    assert_response :success
  end

end
