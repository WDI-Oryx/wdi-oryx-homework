class IngredientsController < ApplicationController
  def index
    @ingredients = Ingredient.all
  end

  def show
    @ingredient = Ingredient.find_by(id: params[:id])
  end

  def new
    @ingredient = Ingredient.new
  end

  def create
    ingredient = Ingredient.create ingredient_params
    redirect_to ingredients_index_path()
  end

  private

  def ingredient_params
    params.require(:ingredient).permit(:name)
  end
end
