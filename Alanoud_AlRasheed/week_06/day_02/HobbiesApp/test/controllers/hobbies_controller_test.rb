require 'test_helper'

class HobbiesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get hobbies_index_url
    assert_response :success
  end

  test "should get new" do
    get hobbies_new_url
    assert_response :success
  end

  test "should get show" do
    get hobbies_show_url
    assert_response :success
  end

  test "should get edit" do
    get hobbies_edit_url
    assert_response :success
  end

end
