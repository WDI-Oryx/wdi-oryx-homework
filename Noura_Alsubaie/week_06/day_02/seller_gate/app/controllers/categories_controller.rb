class CategoriesController < ApplicationController
 def index
    @categories = Category.all
  end

  def show
    @Category = Category.find_by(id: params[:id])
  end
end
