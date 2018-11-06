require 'test_helper'

class SongTypesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get song_types_index_url
    assert_response :success
  end

  test "should get show" do
    get song_types_show_url
    assert_response :success
  end

end
