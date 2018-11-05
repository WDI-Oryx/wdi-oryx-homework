class CheesesController < ApplicationController
  def index
    @cheeses = Cheese.all
  end

  def new
    @cheeses = Cheese.new
  end

  def create
    cheese_params = params.require(:cheese).permit(:name, :milk_type, :image_url, :description)
    @cheeses = Cheese.create(cheese_params)
    redirect_to @cheeses
  end

  def edit
    @cheeses = Cheese.find(params[:id])
  end

  def update
    cheese_params = params.require(:cheese).permit(:name, :milk_type, :image_url, :description)
    @cheeses = Cheese.find(params[:id])
    @cheeses = Cheese.update(cheese_params)
    redirect_to @cheeses
  end

  def destroy
    @cheeses = Cheese.find(params[:id])
    @cheeses.destroy
    redirect_to cheeses_path
  end

  def show
    @cheeses = Cheese.find(params[:id])
  end
end
