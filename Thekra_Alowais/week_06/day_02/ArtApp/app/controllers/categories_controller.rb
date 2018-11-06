class CategoriesController < ApplicationController
  def index
    # raise "aa"
    @categories = Category.all
  end

  def show
    @category = Category.find_by_id(params[:id])
  end
end
