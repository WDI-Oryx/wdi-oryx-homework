require 'test_helper'

class ArtiestsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get artiests_index_url
    assert_response :success
  end

  test "should get show" do
    get artiests_show_url
    assert_response :success
  end

  test "should get edit" do
    get artiests_edit_url
    assert_response :success
  end

  test "should get new" do
    get artiests_new_url
    assert_response :success
  end

end
