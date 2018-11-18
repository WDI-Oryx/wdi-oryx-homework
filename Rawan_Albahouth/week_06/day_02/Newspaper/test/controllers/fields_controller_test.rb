require 'test_helper'

class FieldsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get fields_index_url
    assert_response :success
  end

  test "should get show" do
    get fields_show_url
    assert_response :success
  end

end
