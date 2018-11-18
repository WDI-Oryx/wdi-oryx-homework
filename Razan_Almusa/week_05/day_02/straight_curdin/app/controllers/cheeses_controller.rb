class CheesesController < ApplicationController
  def index
    @cheeses = Cheese.all
  end

  def show
    @cheese = Cheese.find(params[:id])
  end

  def edit
    @cheese = Cheese.find(params[:id])
  end

  def new
    @cheese = Cheese.new
  end

  def update
    cheese_params = params.require(:cheese).permit(:name, :milk_type, :image_url, :description, :stank_level)
    @cheese = Cheese.find(params[:id])
    @cheese.update(cheese_params)
    redirect_to @cheese
  end

  def create
    cheese_params = params.require(:cheese).permit(:name, :milk_type, :image_url, :description, :stank_level)
    @cheese = Cheese.create(cheese_params)
    redirect_to cheeses_url
  end

  def destroy
    @cheese = Cheese.find(params[:id])
    @cheese.destroy
    redirect_to cheeses_url
  end
end
