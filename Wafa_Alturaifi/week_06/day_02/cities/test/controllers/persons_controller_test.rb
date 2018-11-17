require 'test_helper'

class PersonsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get persons_index_url
    assert_response :success
  end

  test "should get show" do
    get persons_show_url
    assert_response :success
  end

  test "should get edit" do
    get persons_edit_url
    assert_response :success
  end

end
