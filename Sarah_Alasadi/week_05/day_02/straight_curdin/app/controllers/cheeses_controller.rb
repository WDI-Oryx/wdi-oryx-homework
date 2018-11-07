class CheesesController < ApplicationController
  def index
    @cheese = Cheese.all
  end

  def edit
    @cheese = Cheese.find(params[:id])
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
    redirect_to @cheese
  end
end
