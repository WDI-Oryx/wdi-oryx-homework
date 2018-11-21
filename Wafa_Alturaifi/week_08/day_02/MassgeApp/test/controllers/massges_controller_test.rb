require 'test_helper'

class MassgesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get massges_index_url
    assert_response :success
  end

  test "should get show" do
    get massges_show_url
    assert_response :success
  end

  test "should get new" do
    get massges_new_url
    assert_response :success
  end

  test "should get edit" do
    get massges_edit_url
    assert_response :success
  end

end
