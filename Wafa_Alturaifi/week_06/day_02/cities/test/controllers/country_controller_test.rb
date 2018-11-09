require 'test_helper'

class CountryControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get country_index_url
    assert_response :success
  end

  test "should get show" do
    get country_show_url
    assert_response :success
  end

  test "should get edit" do
    get country_edit_url
    assert_response :success
  end

end
