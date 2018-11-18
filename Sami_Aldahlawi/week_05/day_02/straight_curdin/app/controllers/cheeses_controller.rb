class CheesesController < ApplicationController
  def index
    @all_cheese = Cheese.all
  end

  def show
    @values = Cheese.find(params[:id])
  end

  def edit
    @cheese = Cheese.find(params[:id])
  end

  def new
    @cheese = Cheese.new
  end

  def create
    cheese_params = params.require(:cheese).permit(:name, :milk_type, :description, :stank_level)
    @cheese_create = Cheese.create(cheese_params)
    redirect_to @cheese_create
  end

  def update
    cheese = Cheese.find(params[:id])
    cheese.update(cheese_params)
    redirect_to cheese_path(cheese)
  end

  def destroy
    cheese = Cheese.find(params[:id])
    cheese.destroy
    redirect_to cheeses_path
  end

  def cheese_params
    params.require(:cheese).permit(:name, :milk_type, :description, :stank_level)
  end
end
