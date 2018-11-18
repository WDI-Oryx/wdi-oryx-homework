class CheeseController < ApplicationController

 
  def index
    @cheeses = Cheese.all
  end

 def new
    @cheese = Cheese.new
  end

  def create
    cheese_params = params.require(:cheese).permit(:name, :milk_type, :description, :image_url)
    @cheese = Cheese.create(cheese_params)
    redirect_to @cheese
  end

  def show
    @cheese = Cheese.find(params[:id])
  end

  def edit
    @cheese = Cheese.find(params[:id])
  end

  def update
    cheese_params = params.require(:cheese).permit(:name, :milk_type, :image_url, :description, :stank_level)
    @cheese = Cheese.find(params[:id])
    @cheese.update(cheese_params)
    redirect_to @cheese
  end

  def destroy
    @cheese = Cheese.find(params[:id])
    @cheese.destroy
    redirect_to cheeses_path(@cheese)
  end
end
