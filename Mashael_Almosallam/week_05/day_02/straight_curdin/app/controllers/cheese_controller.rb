class CheeseController < ApplicationController
  def index
    @cheese = Cheese.all
    # redirect_to @cheese
  end

  def show
    @cheese = Cheese.find(params[:id])
  end

  def new
    @cheese = Cheese.new
  end

  def create
    cheese_params = params.require(:cheese).permit(:name, :milk_type, :description, :image_url, :stank_level)
    @cheese = Cheese.create(cheese_params)
    redirect_to @cheese
  end

  def edit
    @cheese = Cheese.find(params[:id])
  end

  def destroy
    @cheese = Cheese.find(params[:id])
    @cheese.destroy
    redirect_to "/cheese"
  end

  def update
    cheese_params = params.require(:cheese).permit(:name, :milk_type, :image_url, :description, :stank_level)
    @cheese = Donut.find(params[:id])
    @cheese.update(donut_params)
    redirect_to @cheese
  end
end
