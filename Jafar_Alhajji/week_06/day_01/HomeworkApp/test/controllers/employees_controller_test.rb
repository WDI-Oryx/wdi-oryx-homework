require 'test_helper'

class EmployeesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get employees_index_url
    assert_response :success
  end

  test "should get show" do
    get employees_show_url
    assert_response :success
  end

  test "should get new" do
    get employees_new_url
    assert_response :success
  end

  test "should get edit" do
    get employees_edit_url
    assert_response :success
  end

end
