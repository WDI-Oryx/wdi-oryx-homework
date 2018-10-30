class CheesesController < ApplicationController
  def index
    @cheeses = Cheese.all
  end

  def show
    @cheese = Cheese.find(params[:id])
  end

  def new
    @cheese = Cheese.new
  end

  def create
    cheese_params = params.require(:cheese).permit(:name, :milk_type, :image_url, :description)
    @cheese = Cheese.create(cheese_params)
    redirect_to cheeses_url
  end

  def edit
    @cheese = Cheese.find(params[:id])
  end

  def update
    cheese_params = params.require(:cheese).permit(:name, :milk_type, :image_url, :description)
    @cheese = Cheese.find(params[:id])
    @cheese.update(cheese_params)
    redirect_to @cheese
  end

  def destroy
    @cheese = Cheese.find(params[:id])
    @cheese.destroy
    redirect_to cheeses_url
  end
end
